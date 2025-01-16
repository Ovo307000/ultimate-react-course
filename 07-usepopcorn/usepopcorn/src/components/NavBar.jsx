import PropTypes from "prop-types";
import Logo      from "./ui/Logo";
import SearchBar from "./ui/SearchBar";
import SearchResult from "./ui/SearchResult";

/**
 *
 * @param { movies } movies array of movies
 * @returns { JSX.Element } JSX element
 */
export default function NavBar ( { movies } )
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
