import { Movie } from "./Movie";

/**
 * WatchedMovie interface extends Movie interface
 * @interface WatchedMovie
 * @extends {Movie}
 * @property {number} runtime - The runtime of the movie in minutes.
 * @property {number} imdbRating - The IMDb rating of the movie.
 * @property {number} userRating - The user rating of the movie.
 */
export interface WatchedMovie extends Movie {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
