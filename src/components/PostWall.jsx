import { useState } from "react";
import { Post } from "./Post";
import { Todos } from "./Todos";
import { useSelector } from "react-redux";

export const PostWall = ({ posts }) => {
  const [todos, setTodos] = useState([]);
  const users = useSelector((state) => state.users) || [];
  const todosGlobal = useSelector((state) => state.todos);

  const setUserTodos = (user) => {
    const index = users.indexOf(user) + 1;
    const todosToSet = todosGlobal.filter((todo) => todo.userId === index);
    setTodos(todosToSet);
  };

  const getUser = (postUserId) => {
    let user = users.filter((user) => users.indexOf(user) + 1 === postUserId);
    return user[0];
  };

  return (
    <div className="postWall">
      <div className={todos.length > 0 ? "todoBox visible" : "todoBox"}>
        {todos.length > 0 && <Todos todos={todos} />}
      </div>
      {users.length > 0 &&
        posts.map((post, key) => (
          <Post
            key={key}
            post={post}
            setTodos={setUserTodos}
            user={getUser(post.userId)}
          />
        ))}
    </div>
  );
};
