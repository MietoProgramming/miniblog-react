import { useState } from "react";
import { Post } from "./Post";
import { Todos } from "./Todos";

export const PostWall = ({ posts }) => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div className="todoBox">
        {todos.length > 0 && <Todos todos={todos} />}
      </div>
      {posts.map((post, key) => (
        <Post key={key} post={post} setTodos={setTodos} />
      ))}
    </div>
  );
};
