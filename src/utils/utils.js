export const trimCharsDynamic = (str, numChars) => {
  if (!str) return "NO USER";
  if (str?.length <= numChars * 2) {
    return str;
  }
  //   const middleChars = str.length - numChars * 2;
  const startChars = str?.slice(0, numChars);
  const endChars = str?.slice(-numChars);
  return `${startChars}...${endChars}`;
};
