import { lazy } from "react";
import { IRoute } from "../types";

const Catalogue = lazy(async () => import("../pages/Catalogue"));

const Homepage = lazy(async () => import("../pages/Homepage"));

const Instructions = lazy(async () => import("../pages/Instructions"));

export const PublicRoutes: IRoute[] = [
  {
    path: "/",
    Component: () => <Homepage />,
  },
  {
    path: "/Catalogue",
    Component: () => <Catalogue />,
  },
  {
    path: "/Instructions",
    Component: () => <Instructions />,
  },
];
