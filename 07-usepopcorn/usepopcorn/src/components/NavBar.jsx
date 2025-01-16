import PropTypes    from "prop-types";
import { useState } from "react";


/**
 *
 * @param { movies } movies array of movies
 * @returns { JSX.Element } JSX element
 */
export default function NavBar ( { movies } )
{
    const [ query, setQuery ] = useState ( "" );

    return <>
        <nav className = "nav-bar">
            <div className = "logo">
                <span role = "img">🍿</span>
                <h1>usePopcorn</h1>
            </div>

            <input
                className = "search"
                type = "text"
                placeholder = "Search movies..."
                value = { query }
                onChange = { e => setQuery ( e.target.value ) }
            />
            <p className = "num-results">
                Found <strong>{ movies.length }</strong> results
            </p>
        </nav>
    </>;
}

NavBar.propTypes = {
    movies: PropTypes.array.isRequired
};
