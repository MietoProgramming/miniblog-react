import '../styles/App.css';
import { Header } from "./Header";
import { PostWall } from "./PostWall";
import { useEffect } from "react";
import { setupTodos, setupPosts, setupUsers } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  let seedForAPI = "mySeed";
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {
      let posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
      console.log(posts);
      let comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());
      let todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json());
      let users = await fetch(`https://randomuser.me/api/?seed=${seedForAPI}&results=10`).then(res => res.json());

      let finalPosts = posts.map(post => {
        return { ...post, comments: comments.filter(comment => comment.postId === post.id) }
      });

      dispatch(setupPosts(finalPosts));
      dispatch(setupTodos(todos));
      dispatch(setupUsers(users.results));
    }

    fetchData();

  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <PostWall posts={posts} />
    </div>
  );
}

export default App;
