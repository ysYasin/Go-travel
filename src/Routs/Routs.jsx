import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch(
        `https://go-travel-server-eixjmn8b8-ysyasins-projects.vercel.app/locations`
      ),
  },
]);

export default route;
