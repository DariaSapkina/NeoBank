export const getRouteByStep = (step: number, applicationId: number | null) => {
  if (!applicationId) return "/loan";
  switch (step) {
    case 2:
      return `/loan/${applicationId}`;

    case 3:
      return `/loan/${applicationId}/document`;

    case 4:
      return `/loan/${applicationId}/document/sign`;

    case 5:
      return `/loan/${applicationId}/code`;

    default:
      return "/loan";
  }
};

export const getButtonConfig = (
  completedFirstStep: boolean,
  applicationId: number | null,
  onScrollToForm: () => void,
  onNavigate: (applicationId: number | null) => void,
) => {
  if (completedFirstStep) {
    return {
      title: "Continue registration",
      onClick: onNavigate,
    };
  }

  if (!applicationId) {
    return {
      title: "Apply for card",
      onClick: onScrollToForm,
    };
  } else {
    return {
      title: "Choose an offer",
      onClick: onScrollToForm,
    };
  }
};
