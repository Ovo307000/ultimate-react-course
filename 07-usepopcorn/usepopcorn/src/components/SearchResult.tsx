import { Movie } from "../types/Movie";

interface SearchResultProps {
  movies: Movie[];
}

export default function SearchResult(
  props: SearchResultProps
): React.ReactNode {
  const { movies } = props;

  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
