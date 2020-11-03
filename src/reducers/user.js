const initialState = {
    username: 'Jackie',
    status: 'offline',
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case "CHNAGE_USERNAME":
            // return Object.assign({}, state, { username: action.username });
            return {
                ...state,
                username: action.username
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
