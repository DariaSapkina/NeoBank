import type { RouteProps } from "react-router-dom";
import {
  CodePage,
  SignDocumentPage,
  HomePage,
  LoanPage,
  PersonalAndEmploymentPage,
  PaymentSchedulePage,
} from "@/pages";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
  SECOND_STEP = "secondStep",
  THIRD_STEP = "thirdStep",
  FOURTH_STEP = "fourthStep",
  CODE_STEP = "codeStep",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.SECOND_STEP]: "/loan/:applicationId",
  [AppRoutes.THIRD_STEP]: "/loan/:applicationId/document",
  [AppRoutes.FOURTH_STEP]: "/loan/:applicationId/document/sign",
  [AppRoutes.CODE_STEP]: "/loan/:applicationId/code",
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
    element: <PersonalAndEmploymentPage />,
  },
  [AppRoutes.THIRD_STEP]: {
    path: RoutePath.thirdStep,
    element: <PaymentSchedulePage />,
  },
  [AppRoutes.FOURTH_STEP]: {
    path: RoutePath.fourthStep,
    element: <SignDocumentPage />,
  },
  [AppRoutes.CODE_STEP]: {
    path: RoutePath.codeStep,
    element: <CodePage />,
  },
};
