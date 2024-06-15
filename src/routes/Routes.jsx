import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>pagina About</div>,
  },
]);

export default routes;

