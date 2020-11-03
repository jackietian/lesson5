import { fetchRepos}  from '../api/repo-api'

export const loadRepos = params => dispatch => {
  dispatch(loadReposRequested());
  fetchRepos(params)
    .then(res => dispatch(loadReposSucceeded(res)))
    .catch(err => dispatch(loadReposFailed(err)));
};

const loadReposRequested = () => ({
  type: 'REQUESTED'
});

const loadReposSucceeded = res => ({
  type: 'SUCCESS',
  data: { repos: res.data || [] }
});

const loadReposFailed = err => ({
  type: 'FAILED',
  data: { err }
});