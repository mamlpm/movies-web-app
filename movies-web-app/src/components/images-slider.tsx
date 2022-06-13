import { FC } from "react";
import { NavLink } from "react-router-dom";
import useSliderReducer from "../hooks/slider-reducer";
interface IImagesSliderProps {
  images: { imagesUrls: string; movieId: number; movieTitle: string }[];
  queriedData: string;
}

const ImagesSlider: FC<IImagesSliderProps> = (props) => {
  const [{ count }, { increase, decrease }] = useSliderReducer(
    props.images.length
  );

  return (
    <div className="slider">
      <div className="slider-header">
        <h1>{props.queriedData}</h1>
      </div>
      {props.images.length > 3 && (
        <div className="left-arrow">
          <button className="slider-button" id="left-arrow" onClick={decrease}>
            {"<"}
          </button>
        </div>
      )}
      <div className="image-1">
        <NavLink to={`/rating/${props.images[count].movieId}`}>
          <img
            src={
              "https://image.tmdb.org/t/p/w342/" +
              props.images[count].imagesUrls
            }
            alt={props.images[count].movieTitle}
          />
        </NavLink>
      </div>
      {props.images.length > 1 && (
        <div className="image-2">
          <NavLink
            to={`/rating/${
              count + 1 >= props.images.length
                ? props.images[count + 1 - props.images.length].movieId
                : props.images[1 + count].movieId
            }`}
          >
            <img
              src={
                count + 1 >= props.images.length
                  ? "https://image.tmdb.org/t/p/w342/" +
                    props.images[count + 1 - props.images.length].imagesUrls
                  : "https://image.tmdb.org/t/p/w342/" +
                    props.images[1 + count].imagesUrls
              }
              alt={
                count + 1 >= props.images.length
                  ? props.images[count + 1 - props.images.length].movieTitle
                  : props.images[1 + count].movieTitle
              }
            />
          </NavLink>
        </div>
      )}
      {props.images.length > 2 && (
        <div className="image-3">
          <NavLink
            to={`/rating/${
              count + 2 >= props.images.length
                ? props.images[count + 2 - props.images.length].movieId
                : props.images[2 + count].movieId
            }`}
          >
            <img
              src={
                count + 2 >= props.images.length
                  ? "https://image.tmdb.org/t/p/w342/" +
                    props.images[count + 2 - props.images.length].imagesUrls
                  : "https://image.tmdb.org/t/p/w342/" +
                    props.images[2 + count].imagesUrls
              }
              alt={
                count + 2 >= props.images.length
                  ? props.images[count + 2 - props.images.length].movieTitle
                  : props.images[2 + count].movieTitle
              }
            />
          </NavLink>
        </div>
      )}
      {props.images.length > 3 && (
        <div className="right-arrow">
          <button className="slider-button" id="right-arrow" onClick={increase}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImagesSlider;
