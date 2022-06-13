export interface IMovieRating {
    [movieId: number]: {
      rating: number;
      review: string;
    };
  }
  
  export interface IReducerPayloadType {
    movieId: number;
    rating: number;
    review: string;
  }
  
  export enum MovieRatingKind {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
  }
  
  export interface MovieRatingAction {
    type: MovieRatingKind;
    payload: IReducerPayloadType;
  }