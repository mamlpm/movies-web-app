import { Dispatch } from "react";

export interface IMovieRatingContextProps {
  movieRatingState: IMovieRatingsState,
  movieRatingDispatch: Dispatch<IMovieRatingActions>
}

export interface IPayloadType {
  rating: number;
  review: string;
  image: string;
  title: string;
  movieId: number
}

export interface IMovieRatingActions {
  type: 'upsert',
  payload: IPayloadType
}

export interface IMovieRatingsState {
  [movieId: number]: IPayloadType;
}

export const initialIMovieRatingState: IMovieRatingsState = {}