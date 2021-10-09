import React, { useEffect } from "react";
import { loadEmojies } from "../actions";
import { connect, useDispatch, useSelector } from "react-redux";

const Emojies = () => {
  const { emojies } = useSelector((state) => ({
    emojies: state.emojies.emojies,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEmojies());
  }, []);

  return (
    <>
      <h1>Emojies list</h1>
      <ul>
        {Object.keys(emojies).map((item, index) => (
          <li key={index}>
            {item} <img src={emojies[item]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Emojies;

// const mapStateToProps = (state) => {
//   return {
//     emojies: [],
//   };
// };

// const mapActionsToProps = {
//   loadEmojies,
// };

// export default connect(mapStateToProps, mapActionsToProps)(Emojies);

// class Emojies extends React.Component {
//   // no local state
//   componentDidMount() {
//     const { loadEmojies } = this.props;
//     loadEmojies();
//   }

//   render() {
//     return (
// <>
//   <h1>Emojies list</h1>
//   <ul>
//     {Object.keys(this.props.emojies).map((item, index) => (
//       <li key={index}>{item} <img src={this.props.emojies[item]} /></li>
//     ))}
//   </ul>
// </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   const {
//     emojies: { emojies, err },
//   } = state;
//   return {
//     emojies,
//   };
// };

// const mapActionsToProps = {
//   loadEmojies,
// };

// export default connect(mapStateToProps, mapActionsToProps)(Emojies);
