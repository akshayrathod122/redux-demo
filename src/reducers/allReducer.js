const initialState = [];

const LogInData = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            console.log('action.type::: ', action.type);
            break;
        }

        case 'LIST': {
            console.log('action.type::: ', action.type);
            break;
        }

        default: return state;
    }
}
export default LogInData