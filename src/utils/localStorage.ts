export const saveUserCountry = (country: string) => {
  localStorage.setItem("country", country);
};

export const getUserCountry = () => {
  return localStorage.getItem("country");
};

export const deleteCountry = () => {
  localStorage.removeItem("country");
};
