import { createContext, useContext, useReducer } from "react";
import {
  IMovieRatingActions,
  IMovieRatingContextProps,
  IMovieRatingsState,
  initialIMovieRatingState,
} from "./ratings.context.types";

export const movieRatingReducer = (
  state: IMovieRatingsState,
  action: IMovieRatingActions
) => {
  switch (action.type) {
    case "upsert":
      return { ...state, [action.payload.movieId]: action.payload };
    default:
      return state;
  }
};

const MovieRatingContext = createContext<IMovieRatingContextProps>({
  movieRatingState: initialIMovieRatingState,
  movieRatingDispatch: () => {},
});

export const MoviRatingConsumer = MovieRatingContext.Consumer;
export const MoviRatingProvider = MovieRatingContext.Provider;
export default MovieRatingContext;
