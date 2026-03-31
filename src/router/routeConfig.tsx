import type { RouteProps } from "react-router-dom";
import { Main } from "../pages/Main";

export enum AppRoutes {
  MAIN = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
};
