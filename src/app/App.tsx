import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Suspense } from "react";
import { Loading } from "../shared/ui/loading/Loading";

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
