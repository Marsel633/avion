import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { AllProducts } from "../../pages/allProducts/ui/AllProducts";
import { Favorites } from "../../pages/favorites/ui/Favorites";
import { Homepage } from "../../pages/home/ui/Homepage";

export const router = createBrowserRouter([
  {
    path: AppRoutes.allProducts,
    element: <AllProducts />,
    errorElement: <div>Error Page</div>,
  },
  {
    path: AppRoutes.homepage,
    element: <Homepage />,
    errorElement: <div>Error Page</div>,
  },
  {
    path: AppRoutes.favorites,
    element: <Favorites />,
    errorElement: <div>Error Page</div>,
  },
]);
