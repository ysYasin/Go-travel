import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default route;
