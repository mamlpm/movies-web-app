import { FC, useReducer } from "react";
// import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
interface IImagesSliderProps {
  imagesUrls: string[];
}
enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
}

const ImagesSlider: FC<IImagesSliderProps> = (props) => {
  const reducer = (state: CountState, action: CountAction) => {
    switch (action.type) {
      case CountActionKind.INCREASE:
        if (state.count === props.imagesUrls.length - 1) return { count: 0 };
        return { count: state.count + 1 };
      case CountActionKind.DECREASE:
        if (state.count === 0) return { count: props.imagesUrls.length - 1 };
        return { count: state.count - 1 };
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const images = props.imagesUrls.map((imageUrl) => {
    return {
      original: "https://image.tmdb.org/t/p/w342/" + imageUrl,
      thumbnail: "https://image.tmdb.org/t/p/w185/" + imageUrl,
    };
  });

  return (
    <div className="slider">
      <div className="left-arrow">
        <button
          id="left-arrow"
          onClick={() =>
            dispatch({ type: CountActionKind.DECREASE, payload: state.count })
          }
        >
          {"<"}
        </button>
      </div>
      <div className="image-1">
        <img src={images[state.count].original} />
      </div>
      <div className="image-2">
        <img
          src={
            state.count + 1 >= props.imagesUrls.length
              ? images[state.count + 1 - props.imagesUrls.length].original
              : images[1 + state.count].original
          }
        />
      </div>
      <div className="image-3">
        <img
          src={
            state.count + 2 >= props.imagesUrls.length
              ? images[state.count + 2 - props.imagesUrls.length].original
              : images[2 + state.count].original
          }
        />
      </div>
      <div className="right-arrow">
        <button
          id="right-arrow"
          onClick={() =>
            dispatch({ type: CountActionKind.INCREASE, payload: state.count })
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
