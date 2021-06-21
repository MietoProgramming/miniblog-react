export const todos = (state = [], action) => {
    switch (action.type) {
        case 'SETUP_INITIAL_TODOS':
            return action.payload;
        default:
            return state;
    }
}