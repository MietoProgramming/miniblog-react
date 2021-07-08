export const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'SETUP_INITIAL_POSTS':
            return action.payload;
        default:
            return state;
    }
}