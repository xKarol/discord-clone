import {
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../constants/validation";

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const IsValidPassword = (password) => {
  if (password?.length < MIN_PASSWORD_LENGTH) return false;
  return true;
};

export const IsValidUsername = (IsValidUsername) => {
  if (IsValidUsername?.length < MIN_USERNAME_LENGTH) return false;
  return true;
};
