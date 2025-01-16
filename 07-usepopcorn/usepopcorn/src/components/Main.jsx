import PropTypes from "prop-types";

/**
 *
 * @param { movies } movies array of movies
 * @param { watched } watched array of watched movies
 * @param { isOpen1 } isOpen1 boolean to open/close the first box
 * @param { setIsOpen1 } setIsOpen1 function to set the state of isOpen1
 * @param { isOpen2 } isOpen2 boolean to open/close the second box
 * @param { setIsOpen2 } setIsOpen2 function to set the state of isOpen2
 * @param { avgImdbRating } avgImdbRating average imdb rating of watched movies
 * @param { avgUserRating } avgUserRating average user rating of watched movies
 * @param { avgRuntime } avgRuntime average runtime of watched movies
 * @returns { JSX.Element } JSX element
 */
export default function Main ( {
                                   movies,
                                   watched,
                                   isOpen1,
                                   setIsOpen1,
                                   isOpen2,
                                   setIsOpen2,
                                   avgImdbRating,
                                   avgUserRating,
                                   avgRuntime
                               } )
{
    return <>
        <main className = "main">
            <div className = "box">
                <button
                    className = "btn-toggle"
                    onClick = { () => setIsOpen1 ( open => !open ) }
                >
                    { isOpen1 ? "–" : "+" }
                </button>
                { isOpen1 && <ul className = "list">
                    { movies?.map ( movie => <li key = { movie.imdbID }>
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
                    </li> ) }
                </ul> }
            </div>

            <div className = "box">
                <button
                    className = "btn-toggle"
                    onClick = { () => setIsOpen2 ( open => !open ) }
                >
                    { isOpen2 ? "–" : "+" }
                </button>
                { isOpen2 && <>
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

                    <ul className = "list">
                        { watched.map ( movie => <li key = { movie.imdbID }>
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
                                <p>
                                    <span>🌟</span>
                                    <span>{ movie.userRating }</span>
                                </p>
                                <p>
                                    <span>⏳</span>
                                    <span>{ movie.runtime } min</span>
                                </p>
                            </div>
                        </li> ) }
                    </ul>
                </> }
            </div>
        </main>
    </>;
}

Main.propTypes = {
    movies       : PropTypes.array.isRequired,
    watched      : PropTypes.array.isRequired,
    isOpen1      : PropTypes.bool.isRequired,
    setIsOpen1   : PropTypes.func.isRequired,
    isOpen2      : PropTypes.bool.isRequired,
    setIsOpen2   : PropTypes.func.isRequired,
    avgImdbRating: PropTypes.number.isRequired,
    avgUserRating: PropTypes.number.isRequired,
    avgRuntime   : PropTypes.number.isRequired
};
