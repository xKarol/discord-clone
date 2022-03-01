export const trimSpace = (str) => (str = str.replace(/\s+\S*$/, ""));

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const getAcronym = (str) => {
  const matches = str.match(/\b(\w)/g);
  return matches.join("");
};
