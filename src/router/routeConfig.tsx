import type { RouteProps } from "react-router-dom";
import {
  CodePage,
  SignDocumentPage,
  HomePage,
  LoanPage,
  PersonalAndEmploymentPage,
  PaymentSchedulePage,
  NotFoundPage,
} from "@/pages";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
  PERSONAL_AND_EMPLOYMENT = "personalAndEmployment",
  PAYMENT_SCHEDULE = "paymentSchedule",
  SIGN_DOCUMENT = "signDocument",
  CODE = "code",
  NOT_FOUND = "notFound",
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.PERSONAL_AND_EMPLOYMENT]: "/loan/:applicationId",
  [AppRoutes.PAYMENT_SCHEDULE]: "/loan/:applicationId/document",
  [AppRoutes.SIGN_DOCUMENT]: "/loan/:applicationId/document/sign",
  [AppRoutes.CODE]: "/loan/:applicationId/code",
  [AppRoutes.NOT_FOUND]: "/*",
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
  [AppRoutes.PERSONAL_AND_EMPLOYMENT]: {
    path: RoutePath.personalAndEmployment,
    element: <PersonalAndEmploymentPage />,
  },
  [AppRoutes.PAYMENT_SCHEDULE]: {
    path: RoutePath.paymentSchedule,
    element: <PaymentSchedulePage />,
  },
  [AppRoutes.SIGN_DOCUMENT]: {
    path: RoutePath.signDocument,
    element: <SignDocumentPage />,
  },
  [AppRoutes.CODE]: {
    path: RoutePath.code,
    element: <CodePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
