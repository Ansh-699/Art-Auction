export const GetPrettyTruncate = (str = "", len = 5) => {
  if (str && str.length > len) {
    const front = Math.ceil(len / 2);
    const back = str.length - (len - front);

    return `${str.slice(0, front)}...${str.slice(back)}`;
  }
  return str;
};
