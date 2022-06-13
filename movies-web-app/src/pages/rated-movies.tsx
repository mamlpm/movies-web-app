import { FC, useContext } from "react";
import ImagesSlider from "../components/images-slider";
import MovieRatingContext from "../context/ratings.context";

const RatedMovies: FC = () => {
  const ratedMovies = useContext(MovieRatingContext);
  return (
    <>
      {Object.keys(ratedMovies.movies).length > 0 ? (
        <ImagesSlider
          images={Object.keys(ratedMovies.movies).map((item) => {
            const toReturn = {
              imagesUrls: ratedMovies.movies[parseInt(item)].image,
              movieId: parseInt(item),
              movieTitle: ratedMovies.movies[parseInt(item)].title,
            };
            return toReturn;
          })}
          queriedData={"Películas puntuadas"}
        />
      ) : (
        <p>No has puntuado ninguna película</p>
      )}
    </>
  );
};

export default RatedMovies;
