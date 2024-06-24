import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegisterTutor from "../pages/RegisterTutor";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/register-student",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register-tutor",
    element: <RegisterTutor />,
  },
]);

export default routes;
