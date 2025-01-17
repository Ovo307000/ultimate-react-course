import { useState } from "react";
import { Movie } from "./types/Movie";
import { WatchedMovie } from "./types/WatchedMovie";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedMovieData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App(): React.ReactNode {
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watchedMovies] = useState<WatchedMovie[]>(tempWatchedData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} watchedMovies={watchedMovies} />
    </>
  );
}
