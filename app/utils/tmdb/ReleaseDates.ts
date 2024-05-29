import { MovieReleaseData } from "@/app/interface/iReleaseDates";
import { promises } from "dns";

export default async function getReleaseDates(id: number): Promise<MovieReleaseData> {
  const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!token) {
    throw new Error('TMDB_API_KEY não foi definido.');
  }
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  
  if (!response.ok) {
    console.error('Erro ao buscar data de lançamento:', response);
    return {} as MovieReleaseData;
  }
 
  const data = await response.json(); 

  return data;


}