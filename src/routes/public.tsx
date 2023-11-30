import { lazy } from "react";
import { IRoute } from "../types";

const Homepage = lazy(async () => import("../pages/Homepage"));

const Instructions = lazy(async () => import("../pages/Instructions"));

const WordleGame = lazy(async () => import("../pages/WordleGame"));

const OngoingWordle = lazy(async () => import("../pages/OngoingWordle"));


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
  {
    path: "/OngoingWordle/:id",
    Component: () => <OngoingWordle />,
  },
];
