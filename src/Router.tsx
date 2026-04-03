import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntroPage } from "./pages/Auth/Intro.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
