import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./Home";
import MainProduct from "./MainProduct";


import Cart from "./Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:_id",
    element: <MainProduct/>
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
  
  

};

export default AppRouter;