import PropTypes from "prop-types";
import Logo      from "./ui/Logo";
import SearchBar from "./ui/SearchBar";

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
            <p className = "num-results">
                Found <strong>{ movies.length }</strong> results
            </p>
        </nav>
    </>;
}

NavBar.propTypes = {
    movies: PropTypes.array.isRequired
};
