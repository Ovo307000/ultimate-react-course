import PropTypes from "prop-types";
import Box from "./ui/Box";
import Button from "./ui/Button";

export default function MovieListBox ( { movies, isWatchedMoviesOpen, setIsWatchedMoviesOpen } )
{
    function renderMovies ( movies )
    {
        return movies.map ( movie => <li key = { movie.imdbID }>
            <img
                src = { movie.Poster }
                alt = { `${ movie.Title } poster` }
            />
            <h3>{ movie.Title }</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{ movie.Year }</span>
                </p>
            </div>
        </li> );
    }

    return <>
        <Box>
            <Button
                onClick = { () => setIsWatchedMoviesOpen ( open => !open ) }
            >
                { isWatchedMoviesOpen ? "–" : "+" }
            </Button>
            { isWatchedMoviesOpen && <ul className = "list">
                { renderMovies ( movies ) }
            </ul> }
        </Box>
    </>;
}

MovieListBox.propTypes = {
    movies: PropTypes.array.isRequired,
    isWatchedMoviesOpen: PropTypes.bool.isRequired,
    setIsWatchedMoviesOpen: PropTypes.func.isRequired
};
