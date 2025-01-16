import { Movie } from "../types/Movie";
import Logo from "./Logo";
import Search from "./Search";
import SearchResult from "./SearchResult";

interface NavbarProps {
  movies: Movie[];
}

export default function Navbar(props: NavbarProps): React.ReactNode {
  const { movies } = props;

  // SearchResult

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <SearchResult movies={movies} />
    </nav>
  );
}
