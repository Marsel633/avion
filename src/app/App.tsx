import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";
import { Loading } from "../shared";

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
