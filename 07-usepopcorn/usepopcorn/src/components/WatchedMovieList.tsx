import WatchedMovieItem from "./WatchedMovieItem";
import { WatchedMovie } from "../types/WatchedMovie";

interface WatchedMovieListProps {
  watchedMovies: WatchedMovie[];
}

export default function WatchedMovieList(
  props: WatchedMovieListProps
): React.ReactNode {
  const { watchedMovies } = props;

  return (
    <ul className="list">
      {watchedMovies?.map(watchedMovie => (
        <WatchedMovieItem
          key={watchedMovie.imdbID}
          watchedMovie={watchedMovie}
        />
      ))}
    </ul>
  );
}
