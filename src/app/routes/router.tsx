import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { AllProducts } from "../../pages/allProducts/ui/AllProducts";
import { ProductItem } from "../../pages/product/ui/ProductItem";
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
    path: AppRoutes.productItem,
    element: <ProductItem />,
    errorElement: <div>Error Page</div>,
  },
]);
