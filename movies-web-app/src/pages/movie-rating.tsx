import { FC, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import MovieRatingContext from "../context/ratings.context";
import { IMovieRating } from "../context/ratings.context.types";
import { MoviesGateway } from "../gateways/movies.gateway";

const MovieRating: FC = () => {
  const moviesGateway = new MoviesGateway();
  const { movieId } = useParams();
  const moviesRatingContext = useContext(MovieRatingContext);
  const [rating, setRating] = useState<{
    movieId: number;
    rating: number;
    review: string;
    image: string;
  }>({
    movieId: 0,
    rating: 0,
    review: "",
    image: "",
  });

  useEffect(() => {
    setRating({
      movieId: parseInt(movieId ?? "0"),
      rating: moviesRatingContext.movies[parseInt(movieId ?? "0")]?.rating ?? 0,
      review:
        moviesRatingContext.movies[parseInt(movieId ?? "0")]?.review ?? "",
      image: moviesRatingContext.movies[parseInt(movieId ?? "0")]?.image ?? "",
    });
  }, []);
  const { isLoading, error, data } = useQuery("getMovieById", async () =>
    moviesGateway.getImageAndNameMovieByid(parseInt(movieId ?? "0"))
  );
  const handleUpsert = () => {
    if (rating.rating === 0 || rating.review === "") {
      window.alert("Por favor, cumplimente todos los campos");
      return;
    }

    const values: IMovieRating = {
      ...moviesRatingContext.movies,
      [rating.movieId]: {
        rating: rating.rating,
        review: rating.review,
        image: data ? data.poster_path : "",
        title: data ? data.name : "",
      },
    };
    moviesRatingContext.upsertMovies(values);
    window.alert("Película puntuada");
  };
  const handleChange = (event: any) => {
    setRating({ ...rating, [event.target.name]: event.target.value });
  };

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return <div>{"An error has occurred: " + (error as any).message}</div>;
  return (
    <div
      className="movie-rating"
      style={{
        backgroundImage: `url("${
          "https://image.tmdb.org/t/p/original/" + data?.imagePath
        }")`,
      }}
    >
      <div className="title">
        <h1>{data?.name}</h1>
      </div>
      <div className="rating">
        <label>
          <h3>Valoración (1 al 10)</h3>
        </label>
        <input
          id="rating"
          type="number"
          name="rating"
          value={rating.rating}
          onChange={handleChange}
        />
      </div>
      <div className="review">
        <label>
          <h3>Review</h3>
        </label>
        <textarea
          id="review"
          name="review"
          rows={15}
          cols={62}
          value={rating.review}
          onChange={handleChange}
        />
      </div>
      <div className="submit">
        <button onClick={handleUpsert}>Publicar</button>
      </div>
    </div>
  );
};

export default MovieRating;
