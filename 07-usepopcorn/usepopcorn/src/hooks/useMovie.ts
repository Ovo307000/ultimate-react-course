import React, { useState } from "react";
import { Movie } from "../types/Movie";
import { WatchedMovie } from "../types/WatchedMovie";
import { tempMovieData } from "../data/movieData";
import { tempWatchedData } from "../data/watchedMovieData";

export function useMovie() {
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watchedMovies] = useState<WatchedMovie[]>(tempWatchedData);
  const [showWatchedMovies, setShowWatchedMovies] = useState(true);
  const [showMovieList, setShowMovieList] = useState(true);

  function toggleShowMovies(
    setShowMovies: React.Dispatch<React.SetStateAction<boolean>>
  ): () => void {
    return () => setShowMovies(showMovies => !showMovies);
  }

  return {
    movies,
    watchedMovies,
    showWatchedMovies,
    showMovieList,
    toggleShowMovies,
    setShowWatchedMovies,
    setShowMovieList,
  };
}
