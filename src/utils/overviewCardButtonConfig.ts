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
