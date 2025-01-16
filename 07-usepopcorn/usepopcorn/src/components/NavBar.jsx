import PropTypes    from "prop-types";
import Logo         from "./ui/Logo";
import SearchBar    from "./ui/SearchBar";
import SearchResult from "./ui/SearchResult";

/**
 *
 * @param { movies } movies array of movies
 * @param { isWatchedMoviesOpen } isWatchedMoviesOpen boolean
 * @param { setIsWatchedMoviesOpen } setIsWatchedMoviesOpen function
 * @returns { JSX.Element } JSX element
 */
export default function NavBar ()
{
    return <>
        <nav className = "nav-bar">
            <Logo />
            <SearchBar />
            <SearchResult />
        </nav>
    </>;
}

NavBar.propTypes = {
    movies: PropTypes.array.isRequired
};
