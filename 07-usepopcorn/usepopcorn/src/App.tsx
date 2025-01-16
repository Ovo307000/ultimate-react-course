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

export default function App(): React.ReactNode {
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watchedMovies] = useState<WatchedMovie[]>(tempWatchedData);

  const avgImdbRating = average(watchedMovies.map(movie => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map(movie => movie.userRating));
  const avgRuntime = average(watchedMovies.map(movie => movie.runtime));

  return (
    <>
      <Navbar movies={movies} />
      <Main
        movies={movies}
        watched={watchedMovies}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </>
  );
}
