import { useState } from "react";
import { Movie } from "../types/Movie";
import { WatchedMovie } from "../types/WatchedMovie";

interface MainProps {
  movies: Movie[];
  watched: WatchedMovie[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}

export default function Main(props: MainProps) {
  const { movies, watched, avgImdbRating, avgUserRating, avgRuntime } = props;
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1(open => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && (
          <ul className="list">
            {movies?.map(movie => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2(open => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <div className="summary">
              <div>
                <h2>Movies you watched</h2>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} movies</span>
                </p>
                <p>
                  <span>⭐️</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} min</span>
                </p>
              </div>
            </div>

            <ul className="list">
              {watched.map(movie => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
