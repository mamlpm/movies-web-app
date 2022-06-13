import { FC, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("../pages/main-page"));
const SearchPage = lazy(() => import("../pages/search-page"));
const MovieRating = lazy(() => import("../pages/movie-rating"));
const RouterApp: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace={true} />} />
        <Route path="/inicio" element={<MainPage />} />
        <Route path="/search/:searchName" element={<SearchPage />} />
        <Route path="/rating" element={<MainPage />} />
        <Route path="/rating/:movieId" element={<MovieRating />} />
      </Routes>
    </Suspense>
  );
};

export default RouterApp;
