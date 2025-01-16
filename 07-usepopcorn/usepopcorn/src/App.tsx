import { useState } from "react";
import { Movie } from "./types/Movie";
import { WatchedMovie } from "./types/WatchedMovie";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedMovieData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function average(arr: number[]): number {
  return arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
}

export default function App() {
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watched] = useState<WatchedMovie[]>(tempWatchedData);

  const avgImdbRating = average(watched.map(movie => movie.imdbRating));
  const avgUserRating = average(watched.map(movie => movie.userRating));
  const avgRuntime = average(watched.map(movie => movie.runtime));

  return (
    <>
      <Navbar movies={movies} />
      <Main
        movies={movies}
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </>
  );
}
