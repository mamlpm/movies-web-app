import { createContext, useContext, useReducer } from "react";
import {
  IMovieRating,
  IMovieRatingProps,
} from "./ratings.context.types";

const MovieRatingContext = createContext<IMovieRatingProps>({
  movies: {},
  upsertMovies: (items: IMovieRating) => {},
});

export const MoviRatingConsumer = MovieRatingContext.Consumer;
export const MoviRatingProvider = MovieRatingContext.Provider;
export default MovieRatingContext;