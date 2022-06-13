import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterApp from "./routers/router";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { useReducer } from "react";
import { initialIMovieRatingState } from "./context/ratings.context.types";
import {
  movieRatingReducer,
  MoviRatingProvider,
} from "./context/ratings.context";

const queryClient = new QueryClient();
function App() {
  const [movieRatingState, movieRatingDispatch] = useReducer(
    movieRatingReducer,
    initialIMovieRatingState as never
  );
  const movieContextValues = {
    movieRatingState,
    movieRatingDispatch,
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
