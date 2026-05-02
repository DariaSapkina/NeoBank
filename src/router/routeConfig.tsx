import type { RouteProps } from "react-router-dom";
import { HomePage, LoanPage, SecondStepPage, ThirdStepPage } from "@/pages";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
  SECOND_STEP = "secondStep",
  THIRD_STEP = "thirdStep",
  FOURTH_STEP = "fourthStep",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.SECOND_STEP]: "/loan/:applicationId",
  [AppRoutes.THIRD_STEP]: "/loan/:applicationId/document",
  [AppRoutes.FOURTH_STEP]: "/loan/:applicationId/document/sign",
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
  [AppRoutes.THIRD_STEP]: {
    path: RoutePath.thirdStep,
    element: <ThirdStepPage />,
  },
  [AppRoutes.FOURTH_STEP]: {
    path: RoutePath.fourthStep,
    element: <ThirdStepPage />,
  },
};
