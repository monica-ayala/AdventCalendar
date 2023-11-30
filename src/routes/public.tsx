import { lazy } from "react";
import { IRoute } from "../types";

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
    path: "/Instrucciones",
    Component: () => <Instructions />,
  },
  {
    path: "/Wordle/:id",
    Component: () => <WordleGame />,
  },
];
