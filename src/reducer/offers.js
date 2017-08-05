const offers = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        list: action.list,
        filter: action.list
      };

    case 'FILTERED_LIST':
      return {
        ...state,
        filter: action.list
      };

    default:
      return state;
  }
};

export default offers;
