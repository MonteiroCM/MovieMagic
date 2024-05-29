import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { getMovies } from "../utils/tmdb/movies";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default async function MovieTMDB() {
  const session = await getServerSession(authOptions);
  const filmes = await getMovies(1, "pt-BR");
  const urlImage = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {filmes.map((movie) => (
        <div key={movie.id} className="relative">
          <Image
            src={
              movie.poster_path
                ? `${urlImage}${movie.poster_path}`
                : "/no-image.jpg"
            }
            alt="Movie"
            width={750}
            height={500}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-80 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
          <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
          <Image
                  src={
                    movie.poster_path
                      ? `${urlImage}${movie.poster_path}`
                      : "/no-image.jpg"
                  }
                alt="Movie"
                width={750}
                height={500}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
