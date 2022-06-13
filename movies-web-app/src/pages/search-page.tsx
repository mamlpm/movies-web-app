import { FC } from "react";
import { useParams } from "react-router-dom";
import ImagesSliderWrapper from "../components/images-slider-wrapper";

const SearchPage: FC = () => {
  const { searchName } = useParams();
  return (
    <div>
      <ImagesSliderWrapper queryType="search" searchText={searchName} />
    </div>
  );
};

export default SearchPage;
