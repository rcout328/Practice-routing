import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./Home";
import MainProduct from "./MainProduct";


import Cart from "./Cart";
import Practice from "./Practice";


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
    path: "/try",
    element: <Practice/>,
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