import { RouteObject } from "react-router-dom";
import { publicRoutes } from "./public.routes";
import { privateRoutes } from "./privateRoutes";
import RequireAuth from "./RequireAuth";
import PrivateLayout from "../layouts/PrivateLayout";

export const appRoutes: RouteObject[] = [
  publicRoutes,
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <PrivateLayout />
      </RequireAuth>
    ),
    children: privateRoutes.children,
  },
];