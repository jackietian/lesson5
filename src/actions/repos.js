import { fetchRepos } from "../api/repo-api";

// redux-thunk
// redux-saga

// common feature: DELAY dispatch actions

// difference:
// - redux-thunk use callback
// - redux-saga use generator
//   - generator is es6 feature

export const loadRepos = () => {
  const callback = (dispatch) => {
    dispatch(loadReposRequested());
    fetchRepos()
      .then((res) => dispatch(loadReposSucceeded(res)))
      .catch((err) => dispatch(loadReposFailed(err)));
  };
  return callback;
};

const loadReposRequested = () => ({
  type: "REQUESTED",
});

const loadReposSucceeded = (res) => ({
  type: "SUCCESS",
  data: { repos: res.data || [] },
});

const loadReposFailed = (err) => ({
  type: "FAILED",
  data: { err },
});
