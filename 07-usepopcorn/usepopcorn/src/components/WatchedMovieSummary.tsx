import { WatchedMovie } from "../types/WatchedMovie";

interface WatchedMovieSummaryProps {
  watchedMovies: WatchedMovie[];
}

export default function WatchedMovieSummary(
  props: WatchedMovieSummaryProps
): React.ReactNode {
  const { watchedMovies } = props;

  function average(arr: number[]): number {
    return arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
  }

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{average(watchedMovies.map(movie => movie.imdbRating))}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{average(watchedMovies.map(movie => movie.userRating))}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{average(watchedMovies.map(movie => movie.runtime))} min</span>
        </p>
      </div>
    </div>
  );
}
