import React from "react";
import { connect, useSelector } from "react-redux";
import { loadRepos, loadEmojies } from "../actions";

// use hooks
// const Dashboard = () => {
//   const { countRepos, countEmojis } = useSelector((state) => {
//     return {
//       countEmojis: Object.keys(state.emojies.emojies).length,
//       countRepos: state.repos.repos.length,
//     };
//   });
//   return (
//     <>
//       <h1>repos count {countRepos}</h1>
//       <h2>emjoies count {countEmojis}</h2>
//     </>
//   );
// };

// export default Dashboard;

// use connect
class Dashboard extends React.Component {
  
  componentDidMount() {
    const { repos, emojies, loadEmojies, loadRepos } = this.props;
    if (Object.keys(emojies).length === 0) {
      loadEmojies();
    }

    if(repos.length === 0) {
      loadRepos();
    }
  }

  render() {
    return (
      <>
        <h1>repos count {this.props.countRepos}</h1>
        <h2>emjoies count {this.props.countEmojis}</h2>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countEmojis: Object.keys(state.emojies.emojies).length,
    countRepos: state.repos.repos.length,
    emojies: state.emojies.emojies,
    repos: state.repos.repos
  };
};

const mapActionsToProps = {
  loadRepos,
  loadEmojies,
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
