import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("../pages/main-page"));
const RouterApp: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace={true} />} />
          <Route path="/inicio" element={<MainPage />} />
          <Route path="/rating/:movieId" element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterApp;
