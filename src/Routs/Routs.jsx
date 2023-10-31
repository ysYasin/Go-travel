import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Booking from "../Components/Pages/Booking/Booking";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/registerPage/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch(
        `https://go-travel-server-eixjmn8b8-ysyasins-projects.vercel.app/locations`
      ),
  },
  {
    path: "/booking/:id",
    element: <Booking />,
    loader: ({ params }) =>
      fetch(
        `https://go-travel-server-eixjmn8b8-ysyasins-projects.vercel.app/locations/${params.id}`
      ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default route;
