import { useState } from "react";
import { Movie } from "../types/Movie";
import { WatchedMovie } from "../types/WatchedMovie";
import WatchedMovieSummary from "./WatchedMovieSummary";
import WatchedMovieList from "./WatchedMovieList";
import MovieList from "./MovieList";
import MovieListBox from "./MovieListBox";

interface MainProps {
  movies: Movie[];
  watched: WatchedMovie[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}

export default function Main(props: MainProps): React.ReactNode {
  const { movies, watched, avgImdbRating, avgUserRating, avgRuntime } = props;
  const [showWatchedMovies, setShowWatchedMovies] = useState(true);
  const [showMovieList, setShowMovieList] = useState(true);

  function toggleShowMovies(
    setShowMovies: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return () => setShowMovies(prev => !prev);
  }

  return (
    <main className="main">
      {/* Movie List */}
      <MovieListBox
        isOpen={showMovieList}
        toggleOpen={toggleShowMovies(setShowMovieList)}
      >
        <MovieList movies={movies} />
      </MovieListBox>

      {/* Watched Movie Summary */}
      <MovieListBox
        isOpen={showWatchedMovies}
        toggleOpen={toggleShowMovies(setShowWatchedMovies)}
      >
        <WatchedMovieSummary
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
        />

        {/* Watched Movie List */}
        <WatchedMovieList watchedMovies={watched} />
      </MovieListBox>
    </main>
  );
}
