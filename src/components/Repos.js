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


import React from 'react'
import { connect } from 'react-redux'
import { loadRepos } from '../actions'

class Repos extends React.Component {
    componentDidMount() {
        const { loadRepos } = this.props
        loadRepos()
    }

    render() {
        const { loading, repos } = this.props
        if(loading) return <h1>Loading...</h1>

        return <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.name}</li>
            })}
        </ul>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const { repos : { loading, repos }} = state
    return {
        loading,
        repos
    }
}

const mapActionsToProps = {
    loadRepos,
}

export default connect(mapStateToProps, mapActionsToProps)(Repos)
































