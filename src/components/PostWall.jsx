import useState from "react";
import Post from "./Post";

export const PostWall = () => {
  const [posts, setPosts] = useState([]);

  return posts.map((post) => {
    <Post post={post} />;
  });
};
