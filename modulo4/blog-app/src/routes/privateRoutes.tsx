import { RouteObject } from "react-router-dom";
import DashboardHome from "../pages/private/DashboardHome";
import PrivatePlaceholder from "../pages/private/PrivatePlaceHolder";
import CategoriesPage from "../pages/private/CategoriesPage";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  children: [
    { index: true, element: <DashboardHome /> },
    { path: "categories", element: <CategoriesPage /> },
    { path: "posts", element: <PrivatePlaceholder title="Posts" /> },
    { path: "users", element: <PrivatePlaceholder title="Users" /> },
  ],
};