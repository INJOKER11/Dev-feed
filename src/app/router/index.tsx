import { createBrowserRouter } from "react-router";
import { HomePage } from "../../pages/HomePage/HomePage.tsx";
import { MainLayout } from "../../layouts/MainLayout.tsx";
import { SignInPage } from "../../pages/SignInPage.tsx";
import { SignUpPage } from "../../pages/SignUpPage.tsx";

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
    Component: SignUpPage,
  },
  {
    path: "/login",
    Component: SignInPage,
  },
]);
