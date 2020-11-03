const initialState = {
    loading: false,
    repos: []
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
                repos: []
            }
        default: 
            return state
    }
}