export const trimSpace = (str) => (str = str.replace(/\s+\S*$/, ""));

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
