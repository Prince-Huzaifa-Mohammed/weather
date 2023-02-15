export const fullNameIsValid = (fullname: string): boolean => {
  const fullNameRegex = /^[a-zA-Z-'. ]+$/;

  return fullNameRegex.test(fullname);
};

export const emailIsValid = (email: string): boolean => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  return emailRegex.test(email);
};

export const passwordIsValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  return passwordRegex.test(password);
};

export const countryIsValid = (country: string): boolean => {
  return country === "Ghana" || country === "Rwanda" || country === "Germany";
};

export const confirmPasswords = (password1: string, password2: string) => {
  return password1 === password2;
};
