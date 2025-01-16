import { useState } from "react";
import { tempMovieData } from "../data/tempMovieData";
import { tempWatchedData } from "../data/tempWatchedData";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

/**
 * @param { number[] } data array of numbers
 * @returns { number } average of the array
 */
function calculateAverage ( data )
{
    return data.reduce ( ( acc, cur, i, arr ) => acc + cur / arr.length, 0 );
}

/**
 * @returns { JSX.Element } JSX element
 */
export default function App ()
{
    const [ movies ] = useState ( tempMovieData );
    const [ watched ] = useState ( tempWatchedData );
    const [ showMovieDetails, setShowMovieDetails ] = useState ( true );
    const [ showWatchedMovieDetails, setShowWatchedMovieDetails ] = useState ( true );

    const avgImdbRating = calculateAverage ( watched.map ( movie => movie.imdbRating ) );
    const avgUserRating = calculateAverage ( watched.map ( movie => movie.userRating ) );
    const avgRuntime = calculateAverage ( watched.map ( movie => movie.runtime ) );

    return <>
        <NavBar movies = { movies } />

        <Main
            movies = { movies }
            watched = { watched }
            isMovieDetailsOpen = { showMovieDetails }
            setIsMovieDetailsOpen = { setShowMovieDetails }
            isWatchedMoviesOpen = { showWatchedMovieDetails }
            setIsWatchedMoviesOpen = { setShowWatchedMovieDetails }
            avgImdbRating = { avgImdbRating }
            avgUserRating = { avgUserRating }
            avgRuntime = { avgRuntime }
        />
    </>;
}
