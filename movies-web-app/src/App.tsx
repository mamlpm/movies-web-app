import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterApp from "./routers/router";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { IMovieRating, IPayloadType } from "./context/ratings.context.types";
import { MoviRatingProvider } from "./context/ratings.context";

const queryClient = new QueryClient();
function App() {
  const [movies, setMovies] = useState<IMovieRating>({});
  const upsertMovies = (items: IMovieRating) => {
    setMovies(items);
  };

  const movieContextValues = {
    movies,
    upsertMovies,
  };
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MoviRatingProvider value={movieContextValues}>
          <RouterApp />
        </MoviRatingProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
