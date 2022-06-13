import { FC, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IReducerPayloadType } from "../context/ratings.context.types";
import { MoviesGateway } from "../gateways/movies.gateway";

const MovieRating: FC = () => {
  const moviesGateway = new MoviesGateway();
  const { movieId } = useParams();
  const [rating, setRating] = useState<IReducerPayloadType>({
    movieId: 0,
    rating: 0,
    review: "",
  });
  const handleChange = (event: any) => {
    setRating({ ...rating, [event.target.name]: event.target.value });
  };
  const { isLoading, error, data } = useQuery("getMovieById", async () =>
    moviesGateway.getImageAndNameMovieByid(parseInt(movieId ?? "0"))
  );

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
        <button>Publicar</button>
      </div>
    </div>
  );
};

export default MovieRating;
