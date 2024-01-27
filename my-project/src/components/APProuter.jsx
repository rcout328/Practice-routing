import { createBrowserRouter,  RouterProvider } from "react-router-dom";

import MainProduct from "./MainProduct";
import Jata from "./Jata";

import Cart from "./Cart";
import Practice from "./Practice";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Jata />,
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