import { FC } from "react";
import ImagesSliderWrapper from "../components/images-slider-wrapper";

const MainPage: FC = () => {
  return (
    <div className="main-page">
      <div className="popular">
        <ImagesSliderWrapper queryType="popular" />
      </div>
      <div className="top_rated">
        <ImagesSliderWrapper queryType="top_rated" />
      </div>
      <div className="upcoming">
        <ImagesSliderWrapper queryType="upcoming" />
      </div>
    </div>
  );
};

export default MainPage;
