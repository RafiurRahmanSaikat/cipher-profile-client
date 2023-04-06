import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    errorElement: <h1>404  </h1>,
    children: [
      { path: "/", element: <Home/> },
      
    ],
  },
]);
