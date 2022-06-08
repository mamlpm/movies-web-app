import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterApp from "./routers/router";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterApp />
    </QueryClientProvider>
  );
}

export default App;
