import { combineReducers } from "redux";
import { posts } from "./posts";
import { todos } from "./todos";
import { users } from "./users";



export const reducers = combineReducers({
    posts,
    todos,
    users
})