export const mapStatusToStep = (status: string): number => {
  switch (status) {
    case "PREAPPROVAL":
      return 2;
    case "APPROVED":
      return 3;
    default:
      return 1;
  }
};
