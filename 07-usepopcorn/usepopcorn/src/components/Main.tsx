import { useState } from "react";
import { Movie } from "../types/Movie";
import { WatchedMovie } from "../types/WatchedMovie";
import WatchedMovieSummary from "./WatchedMovieSummary";
import MovieItem from "./MovieItem";
import WatchedMovieItem from "./WatchedMovieItem";
import Button from "./Button";
import Box from "./Box";

interface MainProps {
  movies: Movie[];
  watched: WatchedMovie[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}

export default function Main(props: MainProps) {
  const { movies, watched, avgImdbRating, avgUserRating, avgRuntime } = props;
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  function renderMovieList() {
    return (
      <ul className="list">
        {movies?.map(movie => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    );
  }

  function renderWatchedMovieList() {
    return (
      <ul className="list">
        {watched?.map(movie => (
          <WatchedMovieItem key={movie.imdbID} watchedMovie={movie} />
        ))}
      </ul>
    );
  }

  return (
    <main className="main">
      <Box>
        <Button onClick={() => setIsOpen1(open => !open)}>
          {isOpen1 ? "–" : "+"}
        </Button>
        {isOpen1 && renderMovieList()}
      </Box>

      <Box>
        <Button onClick={() => setIsOpen2(open => !open)}>
          {isOpen2 ? "–" : "+"}
        </Button>

        {isOpen2 && (
          <>
            <WatchedMovieSummary
              watched={watched}
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
            />

            {renderWatchedMovieList()}
          </>
        )}
      </Box>
    </main>
  );
}
