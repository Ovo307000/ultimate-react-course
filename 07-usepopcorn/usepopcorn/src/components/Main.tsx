import { useState } from "react";
import { Movie } from "../types/Movie";
import { WatchedMovie } from "../types/WatchedMovie";
import WatchedMovieSummary from "./WatchedMovieSummary";
import WatchedMovieList from "./WatchedMovieList";
import MovieList from "./MovieList";
import MovieListBox from "./MovieListBox";

interface MainProps {
  movies: Movie[];
  watchedMovies: WatchedMovie[];
}

export default function Main(props: MainProps): React.ReactNode {
  const { movies, watchedMovies } = props;
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
        <WatchedMovieSummary watchedMovies={watchedMovies} />

        {/* Watched Movie List */}
        <WatchedMovieList watchedMovies={watchedMovies} />
      </MovieListBox>
    </main>
  );
}
