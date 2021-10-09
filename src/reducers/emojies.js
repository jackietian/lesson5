const initialState = {
  emojies: {},
  err: null,
};

export const emojies = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_EMOJIES_SUCCESS":
      return {
        ...state,
        emojies: action.data,
      };
    case "LOAD_EMOJIES_FAIL":
      return {
        ...state,
        emojies: [],
        err: action.data.err,
      };
    default:
      return state;
  }
};
