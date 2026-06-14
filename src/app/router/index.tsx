import { createBrowserRouter } from "react-router";
import { HomePage } from "../../pages/HomePage.tsx";
import { MainLayout } from "../../layouts/MainLayout.tsx";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,

        Component: HomePage,
      },
    ],
  },
  {
    path: "/register",
    element: <div>register</div>,
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
]);
