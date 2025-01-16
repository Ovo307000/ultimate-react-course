import PropTypes from "prop-types";
import MovieListBox from "./MovieListBox";
/**
 *
 * @param { movies } movies array of movies
 * @param { watched } watched array of watched movies
 * @param { isWatchedMoviesOpen } isWatchedMoviesOpen boolean to open/close the first box
 * @param { setIsWatchedMoviesOpen } setIsWatchedMoviesOpen function to set the state of isWatchedMoviesOpen
 * @param { isMovieDetailsOpen } isMovieDetailsOpen boolean to open/close the second box
 * @param { setIsMovieDetailsOpen } setIsMovieDetailsOpen function to set the state of isMovieDetailsOpen
 * @param { avgImdbRating } avgImdbRating average imdb rating of watched movies
 * @param { avgUserRating } avgUserRating average user rating of watched movies
 * @param { avgRuntime } avgRuntime average runtime of watched movies
 * @returns { JSX.Element } A React component, for showing the main content of the app
 */
export default function Main ( {
                                   movies,
                                   watched,
                                   isWatchedMoviesOpen,
                                   setIsWatchedMoviesOpen,
                                   isMovieDetailsOpen,
                                   setIsMovieDetailsOpen,
                                   avgImdbRating,
                                   avgUserRating,
                                   avgRuntime
                               } )
{
    function renderWatchedMovies ( movies )
    {
        return movies.map ( movie => <li key = { movie.imdbID }>
            <img
                src = { movie.Poster }
                alt = { `${ movie.Title } poster` }
            />
            <h3>{ movie.Title }</h3>
            
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{ movie.imdbRating }</span>
                </p>
            </div>

            <div>
                <p>
                    <span>🌟</span>
                    <span>{ movie.userRating }</span>
                </p>
            </div>

            <div>
                <p>
                    <span>⏳</span>
                    <span>{ movie.runtime } min</span>
                </p>
            </div>
        </li> );
    }

    return <>
        <main className = "main">
            <MovieListBox 
                movies = { movies }
                isWatchedMoviesOpen = { isWatchedMoviesOpen }
                setIsWatchedMoviesOpen = { setIsWatchedMoviesOpen }
            />

            <div className = "box">
                <button
                    className = "btn-toggle"
                    onClick = { () => setIsMovieDetailsOpen ( open => !open ) }
                >
                    { isMovieDetailsOpen ? "–" : "+" }
                </button>
                { isMovieDetailsOpen && <>
                    <div className = "summary">
                        <h2>Movies you watched</h2>
                        <div>
                            <p>
                                <span>#️⃣</span>
                                <span>{ watched.length } movies</span>
                            </p>
                            <p>
                                <span>⭐️</span>
                                <span>{ avgImdbRating }</span>
                            </p>
                            <p>
                                <span>🌟</span>
                                <span>{ avgUserRating }</span>
                            </p>
                            <p>
                                <span>⏳</span>
                                <span>{ avgRuntime } min</span>
                            </p>
                        </div>
                    </div>

                    {/* Watched movies */}
                    <ul className = "list">
                        { renderWatchedMovies ( watched ) }
                    </ul>
                </> }
            </div>
        </main>
    </>;
}

Main.propTypes = {
    movies: PropTypes.array.isRequired,
    watched: PropTypes.array.isRequired,
    isWatchedMoviesOpen: PropTypes.bool.isRequired,
    setIsWatchedMoviesOpen: PropTypes.func.isRequired,
    isMovieDetailsOpen: PropTypes.bool.isRequired,
    setIsMovieDetailsOpen: PropTypes.func.isRequired,
    avgImdbRating: PropTypes.number.isRequired,
    avgUserRating: PropTypes.number.isRequired,
    avgRuntime: PropTypes.number.isRequired
};
