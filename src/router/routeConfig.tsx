import type { RouteProps } from "react-router-dom";
import { HomePage } from "@/pages/HomePage/HomePage";

export enum AppRoutes {
  HOME = "home",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
};
