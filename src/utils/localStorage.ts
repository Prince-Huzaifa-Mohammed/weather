import { UserRes } from "../Interfaces/weather";

export const saveUserBio = (userBio: UserRes) => {
  localStorage.setItem("userBio", JSON.stringify(userBio));
};

export const getUserBio = () => {
  const userJSON = localStorage.getItem("userBio");
  if (userJSON) return JSON.parse(userJSON);
};

export const deleteUserBio = () => {
  localStorage.removeItem("userBio");
};
