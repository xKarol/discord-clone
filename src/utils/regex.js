export const trimSpace = (str) => (str = str.replace(/\s+\S*$/, ""));

export const getAcronym = (str) => {
  const matches = str.match(/\b(\w)/g);
  return matches.join("");
};
