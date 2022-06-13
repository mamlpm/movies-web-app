export interface IMovieRating {
  [movieId: number]: IPayloadType;
}

export interface IMovieRatingProps {
  movies: IMovieRating,
  upsertMovies: (items: IMovieRating) => void
}

export interface IPayloadType {
  rating: number;
  review: string;
  image: string;
  title: string;
}