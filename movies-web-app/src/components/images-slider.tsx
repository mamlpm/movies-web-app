import { FC, useReducer } from "react";
// import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import useSliderReducer from "../hooks/slider-reducer";
interface IImagesSliderProps {
  images: { imagesUrls: string; movieId: number }[];
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
      <div className="left-arrow">
        <button className="slider-button" id="left-arrow" onClick={decrease}>
          {"<"}
        </button>
      </div>
      <div className="image-1">
        <img
          src={
            "https://image.tmdb.org/t/p/w342/" + props.images[count].imagesUrls
          }
        />
      </div>
      <div className="image-2">
        <img
          src={
            count + 1 >= props.images.length
              ? "https://image.tmdb.org/t/p/w342/" +
                props.images[count + 1 - props.images.length].imagesUrls
              : "https://image.tmdb.org/t/p/w342/" +
                props.images[1 + count].imagesUrls
          }
        />
      </div>
      <div className="image-3">
        <img
          src={
            count + 2 >= props.images.length
              ? "https://image.tmdb.org/t/p/w342/" +
                props.images[count + 2 - props.images.length].imagesUrls
              : "https://image.tmdb.org/t/p/w342/" +
                props.images[2 + count].imagesUrls
          }
        />
      </div>
      <div className="right-arrow">
        <button className="slider-button" id="right-arrow" onClick={increase}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
