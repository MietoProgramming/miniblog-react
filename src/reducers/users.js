export const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'SETUP_INITIAL_USERS':
            return action.payload;
        default:
            return state;
    }
}