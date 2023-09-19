const initialState = [];

const LogInData = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            state.push(action.data)
            return state;
        }

        case 'LIST': {
            return state;
        }

        default: return state;
    }
}
export default LogInData