import { WatchedMovie } from "../types/WatchedMovie";

interface WatchedMovieItemProps {
  watchedMovie: WatchedMovie;
}

export default function WatchedMovieItem(props: WatchedMovieItemProps) {
  const { watchedMovie: movie } = props;

  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
