import MovieTMDB from "../components/MovieTMDB";
import MovieVideo from "../components/MovieVideo";
import NavBar from "../components/NavBar";
import RecentlyAdded from "../components/RecentlyAdded";
import Teste from "./tmdb/page";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <h1 className="text-3xl font-bold">Local Base</h1>
      <RecentlyAdded />
      <h1 className="text-3xl font-bold">Api TMDB</h1>
      <MovieTMDB />
    </div>
  );
}
