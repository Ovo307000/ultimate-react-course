import { useState }        from "react";
import { tempMovieData }   from "../data/tempMovieData";
import { tempWatchedData } from "../data/tempWatchedData";
import Main                from "./components/Main";
import NavBar              from "./components/NavBar";

/**
 * 计算平均值, 用于计算平均评分
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
    const [ watchedMovies ] = useState ( tempWatchedData );
    const [ showMovieDetails, setShowMovieDetails ] = useState ( true );
    const [ showWatchedMovieDetails, setShowWatchedMovieDetails ] = useState ( true );

    const avgImdbRating = calculateAverage ( watchedMovies.map ( movie => movie.imdbRating ) );
    const avgUserRating = calculateAverage ( watchedMovies.map ( movie => movie.userRating ) );
    const avgRuntime = calculateAverage ( watchedMovies.map ( movie => movie.runtime ) );

    return <>
        <NavBar countMovies = { movies.length } />

        <Main
            movies = { movies }
            watched = { watchedMovies }
            isMoviesOpen = { showMovieDetails }
            setIsMoviesOpen = { setShowMovieDetails }
            isWatchedMoviesOpen = { showWatchedMovieDetails }
            setIsWatchedMoviesOpen = { setShowWatchedMovieDetails }
            avgImdbRating = { avgImdbRating }
            avgUserRating = { avgUserRating }
            avgRuntime = { avgRuntime }
        />
    </>;
}
