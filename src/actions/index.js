export const setupTodos = todos => ({
    type: 'SETUP_INITIAL_TODOS',
    payload: todos
});

export const addPost = post => ({
    type: 'ADD_POST',
    payload: post
});

export const updatePost = updatedPost => ({
    type: 'UPDATE_POST',
    payload: updatedPost
})

export const setupPosts = posts => ({
    type: 'SETUP_INITIAL_POSTS',
    payload: posts
});

export const addUser = user => ({
    type: 'ADD_USER',
    payload: user
});

export const setupUsers = users => ({
    type: 'SETUP_INITIAL_USERS',
    payload: users
});