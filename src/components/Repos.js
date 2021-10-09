// import React from 'react'
// import { connect } from 'react-redux'
// import { loadRepos } from '../actions/repos'

// class Repos extends React.Component {
//     componentDidMount() {
//         const { loadRepos } = this.props
//         loadRepos()
//     }

//     render() {
//         const { loading, repos } = this.props
//         if(loading) return <>Loading....</>

//         return <ul>
//             {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
//         </ul>
//     }
// }

// const mapStateToProps = (state) => {
//     const { repos: { loading, repos } } = state
//     return {
//         repos,
//         loading,
//     }
// }

// const mapActionsToProps = {
//     loadRepos,
// }
// export default connect(mapStateToProps,mapActionsToProps)(Repos)

import React from "react";
import { connect } from "react-redux";
import { loadRepos } from "../actions";
import { Route, Link, withRouter } from "react-router-dom";
import Repo from "./Repo";
class Repos extends React.Component {
  // no local state
  componentDidMount() {
    const { loadRepos } = this.props;
    loadRepos();
  }

  render() {
    const { loading, repos, err, match } = this.props;
    if (loading) return <h1>Loading...</h1>;
    if (err) return <h1>{err}</h1>;

    return (
      <>
        <h1>repos list</h1>
        <ul>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <Link to={`${match.path}/${repo.name}`}>{repo.name}</Link>
              </li>
            );
          })}
        </ul>

        <Route path={`${match.path}/:repoId`} component={Repo} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    repos: { loading, repos, err },
  } = state;
  return {
    loading,
    repos,
    err,
  };
};

const mapActionsToProps = {
  loadRepos,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Repos));
