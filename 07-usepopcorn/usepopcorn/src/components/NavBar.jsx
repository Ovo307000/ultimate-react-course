import PropTypes    from "prop-types";
import Logo         from "./ui/Logo";
import SearchBar    from "./ui/SearchBar";
import SearchResult from "./ui/SearchResult";

/**
 *
 * @param { countMovies } countMovies number of movies
 * @returns { JSX.Element } JSX element
 */
export default function NavBar ( { countMovies } )
{
    return <>
        <nav className = "nav-bar">
            <Logo />
            <SearchBar />
            <SearchResult countMovies = { countMovies } />
        </nav>
    </>;
}

NavBar.propTypes = {
    countMovies: PropTypes.number.isRequired
};
