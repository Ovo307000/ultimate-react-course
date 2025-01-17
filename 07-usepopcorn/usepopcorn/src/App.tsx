import MovieListBox from "./components/MovieListBox";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import WatchedMovieSummary from "./components/WatchedMovieSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import { useMovie } from "./hooks/useMovie";

export default function App(): React.ReactNode {
  const {
    movies,
    watchedMovies,
    showWatchedMovies,
    showMovieList,
    toggleShowMovies,
    setShowWatchedMovies,
    setShowMovieList,
  } = useMovie();

  return (
    <>
      <Navbar movies={movies} />
      <Main>
        <MovieListBox
          isOpen={showMovieList}
          toggleOpen={toggleShowMovies(setShowMovieList)}
        >
          <MovieList movies={movies} />
        </MovieListBox>

        <MovieListBox
          isOpen={showWatchedMovies}
          toggleOpen={toggleShowMovies(setShowWatchedMovies)}
        >
          <WatchedMovieSummary watchedMovies={watchedMovies} />
          <WatchedMovieList watchedMovies={watchedMovies} />
        </MovieListBox>
      </Main>
    </>
  );
}
