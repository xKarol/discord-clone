import { MIN_PASSWORD_LENGTH } from "../constants/validation";

const IsValidPassword = (password) => {
  if (password?.length < MIN_PASSWORD_LENGTH) return false;
  return true;
};
export { IsValidPassword };
