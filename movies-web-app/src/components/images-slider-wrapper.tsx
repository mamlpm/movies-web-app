import { FC } from "react";
import { useQuery } from "react-query";
import { MoviesGateway } from "../gateways/movies.gateway";
import ImagesSlider from "./images-slider";
interface IImagesSliderWrapperProps {
  queryType: "popular" | "top_rated" | "upcoming" | "search";
  searchText?: string;
}
enum sliderNames {
  popular = "Populares",
  top_rated = "Más valoradas",
  upcoming = "Próximos estrenos",
  search = "Resultados de búsqueda",
}
const ImagesSliderWrapper: FC<IImagesSliderWrapperProps> = (props) => {
  const moviesGateway = new MoviesGateway();
  const { isLoading, error, data } = useQuery(
    props.queryType,
    props.queryType === "search"
      ? async () => moviesGateway.getMoviesByName(props.searchText)
      : async () => moviesGateway.getFavouriteMovies(props.queryType)
  );

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return <div>{"An error has occurred: " + (error as any).message}</div>;

  return (
    <>
      {data && data.length > 0 ? (
        <ImagesSlider
          images={data.map((item) => {
            return {
              imagesUrls: item.poster_path,
              movieId: item.id,
              movieTitle: item.title,
            };
          })}
          queriedData={sliderNames[props.queryType]}
        />
      ) : (
        <div className="no-slider">
          <p>
            No se han encontrado películas que coincidan con el texto insertado
          </p>
        </div>
      )}
    </>
  );
};

export default ImagesSliderWrapper;
