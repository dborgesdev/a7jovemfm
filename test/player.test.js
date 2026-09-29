import test from 'node:test';
import assert from 'node:assert/strict';
import { createPlayer } from '../src/player.js';
class AudioMock extends EventTarget {
  paused = true;
  volume = 1;
  error = null;
  calls = 0;
  async play() { this.calls++; this.paused = false; this.dispatchEvent(new Event('playing')); }
  pause() { this.paused = true; this.dispatchEvent(new Event('pause')); }
  load() { this.error = null; }
}
test('Sem autoplay; play, pausa e volume controlados pelo usuário', async () => {
  const audio = new AudioMock();
  const states = [];
  const player = createPlayer(audio, (state) => states.push(state));
  assert.equal(audio.calls, 0);
  await player.play();
  assert.equal(states.at(-1), 'playing');
  await player.play();
  assert.equal(audio.calls, 1);
  player.pause();
  assert.equal(states.at(-1), 'paused');
  player.volume(0.4);
  assert.equal(audio.volume, 0.4);
  player.volume(2);
  assert.equal(audio.volume, 1);
});
test('Falha de conexão permite tentar novamente', async () => {
  const audio = new AudioMock();
  const states = [];
  audio.play = async () => { throw new Error('network'); };
  const player = createPlayer(audio, (state) => states.push(state));
  await player.play();
  assert.equal(states.at(-1), 'error');
  audio.play = AudioMock.prototype.play;
  await player.play();
  assert.equal(states.at(-1), 'playing');
});
test('Cancelar conexão não mostra erro de uma promessa antiga', async () => {
  const audio = new AudioMock();
  let rejectPlay;
  audio.play = () => new Promise((resolve, reject) => { rejectPlay = reject; });
  const states = [];
  const player = createPlayer(audio, (state) => states.push(state));
  const pending = player.play();
  player.pause();
  rejectPlay(new Error('aborted'));
  await pending;
  assert.equal(states.at(-1), 'paused');
});
