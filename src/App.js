// import React from 'react';
// import ChildComponent from './components/ChildComponent'

// class App extends React.Component {
//   state = {
//     name: 'foo'
//   }

//   changeName = () => {
//     this.setState({
//       name: 'bar'
//     })
//   }

//   render() {
//     const { name } = this.state
//     return <>
//       <h1>hello {name}!</h1>
//       <button onClick={this.changeName}>Click me</button>
//       <ChildComponent name={name} />
//     </>
//   }
// }

// export default App

// import React from 'react';
// import ChildComponent from './components/ChildComponent'
// import { connect } from 'react-redux';
// import { changeUserName, toggleStatus } from './actions';
// import Repos from './components/Repos'

// // // class App extends React.Component {
// // //   changeName = () => {
// // //     const { changeUserName } = this.props
// // //     changeUserName({
// // //       username: 'BAR...'
// // //     })
// // //   }

// // //   handleSignIn = () => {
// // //     const { toggleStatus } = this.props;
// // //     toggleStatus({status: 'offline'})
// // //   }

// // //   render() {
// // //     const { username, status } = this.props
// // //     return <>
// // //       <h1>hello {username}! { status }</h1>
// // //       <button onClick={this.changeName}>Click me</button>
// // //       <button onClick={this.handleSignIn}>Toggle status</button>
// // //     </>
// // //   }
// // // }

// const App = (props) => {
//   const handleClick = () => {
//     const { changeUserName } = props
//     changeUserName({
//       username: 'bar...'
//     })
//   }

//   return (
//     <div>
//       <h1>{props.username}</h1>
//       <button onClick={handleClick}>change username</button>
//       <Repos />
//     </div>
//   )

// }

// const mapStateToProps = (state) => {
//   const { user: { username, status } } = state
//   return {
//     username,
//     status
//   }
// }

// const mapActionsToProps = {
//   changeUserName,
//   toggleStatus,
// }

// export default connect(mapStateToProps, mapActionsToProps)(App)



import React from 'react'
import { connect } from 'react-redux'
import { changeUserName, changeStatus } from './actions'
import Repos from './components/Repos'

class App extends React.Component {
  handleClick = () => {
    const { changeUserName } = this.props

    changeUserName({
      username: 'bar...'
    })
  }

  handleChangeStatus = () => {
    const { changeStatus } = this.props

    changeStatus({
      status: 'online'
    })
  }

  render() {
    return <div>
      <h1>Hello {this.props.username}! {this.props.status}</h1>
      <button onClick={this.handleClick}>change name</button>
      <button onClick={this.handleChangeStatus}>toggle status</button>
      <Repos />
    </div>
  }
}

const mapStateToProps = (state) => {
  const { user: { username, status } } = state
  return {
    username,
    status,
  }
}

const mapActionsToProps = {
  changeUserName,
  changeStatus,
}

export default connect(mapStateToProps, mapActionsToProps)(App)





























