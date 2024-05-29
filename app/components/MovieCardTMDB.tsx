import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useState } from "react";
import { getMovies } from "../utils/tmdb/movies";
import Image from "next/image";
import { iPropsMovieList } from "../interface/iPropsMovieTMDb";
import Tmdb from "../home/tmdb/page";
import TmdbButtons from "./TmdbButtons";

export default function MovieCardTMDB({ page, language }: iPropsMovieList) {
  const [filmes, setFilmes] = useState<iMovie[]>([]);
  const urlImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const data = await getMovies(page, language);
        setFilmes(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchFilmes();
  }, [page, language]);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={5}
        slidesPerView={5}
        lazyPreloadPrevNext={2}
      >
        {filmes.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <Image
              src={
                movie.poster_path
                  ? `${urlImage}${movie.poster_path}`
                  : "/no-image.jpg"
              }
              alt="Movie"
              width={750}
              height={500}
              className="rounded-sm absolute w-full h-full object-left"
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
                <span className="text-white text-center text-sm font-bold">
                  <TmdbButtons id={movie.id} language={language} />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
