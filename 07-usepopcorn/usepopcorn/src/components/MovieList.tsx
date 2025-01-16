import MovieItem from "./MovieItem";
import { Movie } from "../types/Movie";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList(props: MovieListProps): React.ReactNode {
  const { movies } = props;

  return (
    <ul className="list">
      {movies?.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
