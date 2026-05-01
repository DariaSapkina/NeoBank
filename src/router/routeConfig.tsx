import type { RouteProps } from "react-router-dom";
import { HomePage, LoanPage, SecondStepPage } from "@/pages";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
  SECOND_STEP = "secondStep",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.SECOND_STEP]: "/loan/:applicationId",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.LOAN]: {
    path: RoutePath.loan,
    element: <LoanPage />,
  },
  [AppRoutes.SECOND_STEP]: {
    path: RoutePath.secondStep,
    element: <SecondStepPage />,
  },
};
