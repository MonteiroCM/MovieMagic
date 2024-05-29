export async function getMovie(id: number, language: string): Promise<MovieDetails> {
  const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!token) {
    throw new Error('TMDB_API_KEY não foi definido.');
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=${language}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    return {} as MovieDetails;
  }

  const data = await response.json();
  return data;
}