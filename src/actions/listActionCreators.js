export const getList = list => {
  return {
    type: 'GET_LIST',
    list
  };
};

export const filterList = list => {
  return {
    type: 'FILTERED_LIST',
    list
  };
};
