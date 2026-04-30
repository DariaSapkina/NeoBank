export const getButtonConfig = (
  applicationId: number | null,
  currentStep: number,
  onScrollToForm: () => void,
  onNavigate: (applicationId: number | null) => void,
) => {
  if (!applicationId) {
    return {
      title: "Apply for card",
      onClick: onScrollToForm,
    };
  }

  if (currentStep < 3) {
    return {
      title: "Choose an offer",
      onClick: onScrollToForm,
    };
  }

  return {
    title: "Continue registration",
    onClick: onNavigate,
  };
};
