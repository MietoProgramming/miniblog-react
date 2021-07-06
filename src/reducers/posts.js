export const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'SETUP_INITIAL_POSTS':
            return action.payload;
        case 'UPDATE_POST':
            const newState = state.filter(post => post.id !== action.payload.id);
            return [...newState, action.payload];
        default:
            return state;
    }
}