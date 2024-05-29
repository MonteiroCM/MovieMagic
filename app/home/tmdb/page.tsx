"use client";

import { useState } from "react";
import MovieCardTMDB from "../../components/MovieCardTMDB";
import { CircleFadingPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Tmdb() {
  const [page, setPage] = useState(3);

  return (
    <div className="p-5 lg:p-0">
      {Array.from({ length: page }, (_, i) => (
        <>
          <h1 className="text-3xl font-bold">{i + 1}° Lista</h1>
          <MovieCardTMDB page={i + 1} language="pt-BR" />
        </>
      ))}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        className="bg-green-500 text-white w-full py-2 text-center mt-2 cursor-pointer"
      >
        <CircleFadingPlus />
      </Button>
    </div>
  );
}
