import { createContext, useContext, useReducer } from "react";
import {
  IMovieRating,
  IReducerPayloadType,
  MovieRatingAction,
  MovieRatingKind,
} from "./ratings.context.types";

const MovieRatingContext = createContext({} as IMovieRating);

const useMovieRatingReducer = (toUpsert: IReducerPayloadType) => {
  const moviesContext = useContext(MovieRatingContext);
  const reducer = (
    state: IMovieRating,
    action: MovieRatingAction
  ): IMovieRating => {
    return {
      ...state,
      [action.payload.movieId]: {
        rating: action.payload.rating,
        review: action.payload.review,
      },
    };
  };

  const [state, dispatch] = useReducer(reducer, moviesContext);
  const upsert = () => {
    dispatch({ type: MovieRatingKind.CREATE, payload: toUpsert });
  };

  return [state, [upsert]];
};

export default useMovieRatingReducer;
