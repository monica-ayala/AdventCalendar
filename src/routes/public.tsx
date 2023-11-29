
import { lazy } from "react";
import { IRoute } from "../types";

const Catalogue = lazy(async () => import("../pages/Catalogue"));

export const PublicRoutes: IRoute[] = [
  {
    path: "/Catalogue",
    Component: () => <Catalogue />,
  },
];