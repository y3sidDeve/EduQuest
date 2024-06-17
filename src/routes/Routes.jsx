import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>pagina About</div>,
  },
  {
    path: "/register",
    element:  <Register />,
  }
]);

export default routes;

