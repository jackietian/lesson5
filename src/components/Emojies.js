import React, { useEffect } from "react";
import { loadEmojies } from "../actions";
import { connect } from "react-redux";

// const Emojies = ({ emojies, loadEmjoies }) => {
//   useEffect(() => {
//     loadEmojies();
//   }, []);

//   return <h1>Emjois list</h1>;
// };

// const mapStateToProps = (state) => {
//   return {
//     emojies: [],
//   };
// };

// const mapActionsToProps = {
//   loadEmojies,
// };

// export default connect(mapStateToProps, mapActionsToProps)(Emojies);

class Emojies extends React.Component {
  // no local state
  componentDidMount() {
    const { loadEmojies } = this.props;
    loadEmojies();
  }

  render() {
    return (
      <>
        <h1>Emojies list</h1>
        <ul>
          {Object.keys(this.props.emojies).map((item, index) => (
            <li key={index}>{item} <img src={this.props.emojies[item]} /></li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    emojies: { emojies, err },
  } = state;
  return {
    emojies,
  };
};

const mapActionsToProps = {
  loadEmojies,
};

export default connect(mapStateToProps, mapActionsToProps)(Emojies);
