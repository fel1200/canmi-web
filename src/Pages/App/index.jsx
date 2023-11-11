import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
