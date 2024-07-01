import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/estudiante/Register";
import Login from "../pages/estudiante/Login";
import RegisterTutor from "../pages/tutor/RegisterTutor";
import LoginTutor from "../pages/tutor/LoginTutor";
import Dashboard from "../pages/estudiante/Dashboard";

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
  {
    path: "/login-tutor",
    element: <LoginTutor />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "info/",
        element: <div>info </div>,
      },
      {
      path: "student/",
      element: <div>hola</div>,
    }]
  }
]);

export default routes;
