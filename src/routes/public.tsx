import { lazy } from "react";
import { IRoute } from "../types";

const Catalogue = lazy(async () => import("../pages/Catalogue"));

const Homepage = lazy(async () => import("../pages/Homepage"));

const Instructions = lazy(async () => import("../pages/Instructions"));

const WordleGame = lazy(async () => import("../pages/WordleGame"));


export const PublicRoutes: IRoute[] = [
  {
    path: "/",
    Component: () => <Homepage />,
  },
  {
    path: "/Catalogue",
    Component: () => <Homepage />,
  },
  {
    path: "/Instructions",
    Component: () => <Instructions />,
  },
  {
    path: "/Wordle",
    Component: () => <WordleGame />,
  },
];
