import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterApp from "./routers/router";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <RouterApp />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
