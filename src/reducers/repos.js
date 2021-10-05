const initialState = {
    loading: false,
    repos: [],
    err: null
}

export const repos = (state = initialState, action) => {
    switch(action.type) {
        case 'REQUESTED':
            return {
                ...state,
                loading: true,
            }
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                repos: action.data.repos
            }
        case "FAIL":
            return {
                ...state,
                loading: false,
                repos: [],
                err: action.data.err
            }
        default: 
            return state
    }
}