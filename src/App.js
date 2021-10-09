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

import React from 'react'
import { connect } from 'react-redux'
import { changeUserName, changeStatus } from './actions'
import Repos from './components/Repos'
import Emojies from './components/Emojies'

import "./App.css"

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
      <h1>Hello {this.props.username}! {this.props.status} {this.props.gender}</h1>
      <button onClick={this.handleClick}>change name</button>
      <button onClick={this.handleChangeStatus}>toggle status</button>
      <Repos />
      <Emojies />
    </div>
  }
}

const mapStateToProps = (state) => {
  const { user: { username, status, gender } } = state
  return {
    username,
    status,
    gender,
  }
}

const mapActionsToProps = {
  changeUserName,
  changeStatus,
}

export default connect(mapStateToProps, mapActionsToProps)(App)





























