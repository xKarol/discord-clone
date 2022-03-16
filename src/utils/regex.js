export const trimSpace = (str) => (str = str.replace(/\s+\S*$/, ""));

export const getAcronym = (str) => {
  const words = str.split(" ");
  const acr = words.map((word) => word[0]);
  return acr.join("");
};
