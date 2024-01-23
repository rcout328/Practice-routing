import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./Home";

import Contact from "./Contact";
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
    path: "/contact",
    element: <Contact />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
  
  

};

export default AppRouter;