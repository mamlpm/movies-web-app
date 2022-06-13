import { createContext, useContext, useReducer } from "react";

interface IMovieRating {
  [movieId: number]: {
    rating: number;
    review: string;
  };
}

interface IReducerPayloadType {
  movieId: number;
  rating: number;
  review: string;
}

enum MovieRatingKind {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

interface MovieRatingAction {
  type: MovieRatingKind;
  payload: IReducerPayloadType;
}

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
