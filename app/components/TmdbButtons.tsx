import { use, useEffect, useState } from "react";
import { iPropsMovieDetails } from "../interface/iPropsMovieTMDb";
import { getMovie } from "../utils/tmdb/movie";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { formatCurrency } from "../utils/formatadores/moeda";
import StarRating from "./rating/starRating";
import AgeGroup from "./tmdb/AgeGroup/AgeGroup";

export default function TmdbButtons({ id, language }: iPropsMovieDetails) {
  const [movie, setMovie] = useState<MovieDetails>();
  const [open, setOpen] = useState(false);
  const urlImage = "https://image.tmdb.org/t/p/w780";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovie(id, language);
        setMovie(data);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    };

    fetchMovie();
  }, [id, language]);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <CirclePlus className="h-20 w-20" />
      </button>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>  
      <DialogContent className="fixed max-h-[800px] max-w-[800px] min-h-[100px] min-w-[200px]">
          <DialogHeader>
            <div className="flex justify-center">
              <DialogTitle>{movie?.title} - ({movie?.original_title})</DialogTitle>
              </div>

            <div className="flex justify-center gap-2">
                                {movie?.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="border py-0.5 px-1 border-gray-200 rounded"
                    >
                      {genre.name}
                    </p>
                  ))}
                </div>
          </DialogHeader>
          <DialogDescription>{movie?.overview}</DialogDescription>
          <div className="flex justify-betwee">
              <div className="relative">
              <div className="flex justify-center align-middle">
              <p>{movie?.tagline}</p>
              </div>
              <AgeGroup id={movie?.id ?? 0} country="BR" size={32} />
              <Image
                src={ 
                  movie?.backdrop_path
                    ? `${urlImage}${movie.backdrop_path}`
                    : "/no-image.jpg"
                }
                width={780}
                height={439}
                alt={movie?.title ?? ""}
                className="h-auto w-auto rounded-md object-cover mt-2"
              />
              <div className="flex justify-center flex-wrap gap-1 mt-2">
                  <p className="text-green-300">Nota:</p>
                  <p>{movie?.vote_average}</p>
                  <p><StarRating rating={movie?.vote_average ?? 0} /></p>
                </div>
              </div>
              <div className="relative  grid grid-flow-row gap-2  py-3 px-3">
                <div className="flex flex-wrap gap-1 columns-1">
                  <p className="text-green-300">Idioma Original:</p>
                  {movie?.original_language}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-green-300">Companhias de Produção:</p>
                  {movie?.production_companies.map((company) => (
                    <p
                      key={company.id}
                      className="border py-0.5 px-1 border-gray-200 rounded"
                    >
                      {company.name}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  <p className="text-green-300">Orçamento:</p>
                  <p>{ formatCurrency(movie?.budget)}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <p className="text-green-300">Receita:</p>
                  <p>{formatCurrency(movie?.revenue)}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <p className="text-green-300">Status:</p>
                  <p>{movie?.status}</p>
                </div>
              </div>
              <div className="relative  grid grid-rows-12 gap-2">
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
