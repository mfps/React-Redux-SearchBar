const header = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
};
export default header;
