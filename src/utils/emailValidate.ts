export const emailValidate = (email: string) => {
  if (!email) {
    return "Email address is required";
  }

  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regExp.test(email)) {
    return "Invalid email address";
  }

  return null;
};
