import { FC, useContext } from "react";
import ImagesSlider from "../components/images-slider";
import MovieRatingContext from "../context/ratings.context";

const RatedMovies: FC = () => {
  const ratedMovies = useContext(MovieRatingContext);
  return (
    <>
      {Object.keys(ratedMovies.movieRatingState).length > 0 ? (
        <ImagesSlider
          images={Object.keys(ratedMovies.movieRatingState).map(
            (item) => {
              const toReturn = {
                imagesUrls:
                  ratedMovies.movieRatingState[parseInt(item)].image,
                movieId: parseInt(item),
                movieTitle:
                  ratedMovies.movieRatingState[parseInt(item)].title,
              };
              return toReturn;
            }
          )}
          queriedData={"Películas puntuadas"}
        />
      ) : (
        <p>No has puntuado ninguna película</p>
      )}
    </>
  );
};

export default RatedMovies;
