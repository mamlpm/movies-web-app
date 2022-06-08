import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImagesSlider from "./components/images-slider";
import { QueryClient, QueryClientProvider } from "react-query";
import ImagesSliderWrapper from "./components/images-slider-wrapper";
import MainPage from "./pages/main-page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
