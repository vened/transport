export const getArrayFromArray = (data, indexStart, indexEnd) => {
  return [data[0]].concat(data.slice(indexStart, indexEnd));
};

export const getArrayFromArrayNoHead = (data, indexStart, indexEnd) => {
  return data.slice(indexStart, indexEnd);
};
