import { FC, useReducer } from "react";
// import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import useSliderReducer from "../hooks/slider-reducer";
interface IImagesSliderProps {
  imagesUrls: string[];
}

const ImagesSlider: FC<IImagesSliderProps> = (props) => {
  const [{ count }, { increase, decrease }] = useSliderReducer(
    props.imagesUrls.length
  );
  const images = props.imagesUrls.map((imageUrl) => {
    return {
      original: "https://image.tmdb.org/t/p/w342/" + imageUrl,
      thumbnail: "https://image.tmdb.org/t/p/w185/" + imageUrl,
    };
  });

  return (
    <div className="slider">
      <div className="left-arrow">
        <button id="left-arrow" onClick={decrease}>
          {"<"}
        </button>
      </div>
      <div className="image-1">
        <img src={images[count].original} />
      </div>
      <div className="image-2">
        <img
          src={
            count + 1 >= props.imagesUrls.length
              ? images[count + 1 - props.imagesUrls.length].original
              : images[1 + count].original
          }
        />
      </div>
      <div className="image-3">
        <img
          src={
            count + 2 >= props.imagesUrls.length
              ? images[count + 2 - props.imagesUrls.length].original
              : images[2 + count].original
          }
        />
      </div>
      <div className="right-arrow">
        <button id="right-arrow" onClick={increase}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
