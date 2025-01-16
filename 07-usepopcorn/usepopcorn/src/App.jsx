import { useState } from "react";
import { tempMovieData } from "../data/tempMovieData";
import { tempWatchedData } from "../data/tempWatchedData";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

/**
 * @param { array } array array of numbers
 * @returns { number } average of the array
 */
function average ( array )
{
    return array.reduce ( ( acc, cur, i, arr ) => acc + cur / arr.length, 0 );
}

/**
 * @returns { JSX.Element } JSX element
 */
export default function App ()
{
    const [ movies, setMovies ] = useState ( tempMovieData );
    const [ watched, setWatched ] = useState ( tempWatchedData );
    const [ isOpen1, setIsOpen1 ] = useState ( true );
    const [ isOpen2, setIsOpen2 ] = useState ( true );

    const avgImdbRating = average ( watched.map ( movie => movie.imdbRating ) );
    const avgUserRating = average ( watched.map ( movie => movie.userRating ) );
    const avgRuntime = average ( watched.map ( movie => movie.runtime ) );

    return <>
        <NavBar movies = { movies } />

        <Main
            movies = { movies }
            watched = { watched }
            isOpen1 = { isOpen1 }
            setIsOpen1 = { setIsOpen1 }
            isOpen2 = { isOpen2 }
            setIsOpen2 = { setIsOpen2 }
            avgImdbRating = { avgImdbRating }
            avgUserRating = { avgUserRating }
            avgRuntime = { avgRuntime }
        />
    </>;
}
