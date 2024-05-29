export async function getMovies(page: number, language: string): Promise<iMovie[]> {
  const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!token) {
    throw new Error('TMDB_API_KEY não foi definido.');
  }

  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=${language}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  
  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.results;
}
