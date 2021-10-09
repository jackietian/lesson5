import { fetchEmojies } from "../api/emojies-api";

export const loadEmojies = () => {
  return (dispatch) => {
    fetchEmojies()
      .then((res) => dispatch(loadEmojiesSuccess(res)))
      .catch((err) => dispatch(loadEmojiesFail(err)));
  };
};

const loadEmojiesSuccess = (res) => {
  return {
    type: "LOAD_EMOJIES_SUCCESS",
    data: res.data,
  };
};

const loadEmojiesFail = (err) => {
  return {
    type: "LOAD_EMOJIES_FAIL",
    data: err,
  };
};
