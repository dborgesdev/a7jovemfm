import { getNowPlayingStats } from '../scripts/metadata.mjs';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Método não permitido' });
  }

  const stats = await getNowPlayingStats();
  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json(stats);
}
