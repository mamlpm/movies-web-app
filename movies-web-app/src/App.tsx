import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImagesSlider from "./components/images-slider";
import { QueryClient, QueryClientProvider } from "react-query";
import ImagesSliderWrapper from "./components/images-slider-wrapper";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ImagesSliderWrapper queryType="popular" />
    </QueryClientProvider>
  );
}

export default App;
