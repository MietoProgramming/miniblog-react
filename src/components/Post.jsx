import { useState } from "react";
import { FaComment, FaHeart, FaHourglassHalf } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Comment } from "./Comment";

export const Post = ({ post, setTodos, user }) => {
  const [hover, setHover] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const likePost = () => {
    //todo: add liking by action "update post"
  };

  const showTodo = () => {
    setTodos(user);
  };

  const getTimeFromPublish = (time) => {
    const difference = Date.now() - time.getTime();
    if (difference / 1000 <= 60) return `${Math.floor(difference / 1000)}s`;
    else if (difference / 1000 / 60 <= 60)
      return `${Math.floor(difference / 60000)}m`;
    else if (difference / 1000 / 3600 <= 24)
      return `${Math.floor(difference / 1000 / 3600)}h`;
    else return `${Math.floor(difference / 1000 / 3600 / 24)}d`;
  };

  return (
    <div className="postBox">
      <div
        className="post"
        onClick={() => setShowComments(!showComments)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="top">
          <img
            src={user.picture.thumbnail}
            alt=""
            className="thumbnail"
            onClick={() => showTodo()}
          />
          <div className="name">{`${user.name.first} ${user.name.last}`}</div>
          <span className="title">{post.title}</span>
        </div>
        <hr />
        <div className="description">
          <p>{post.body}</p>
        </div>
      </div>
      <div
        className={hover ? "onHoverPost active" : "onHoverPost"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div onClick={() => likePost()}>
          <IconContext.Provider
            value={{ color: "red", size: 75, className: "icon" }}
          >
            <FaHeart />
          </IconContext.Provider>
          <br />
          <span>{post.likes}</span>
        </div>
        <div>
          <IconContext.Provider
            value={{ color: "#4a96d9", size: 75, className: "icon" }}
          >
            <FaComment />
          </IconContext.Provider>
          <br />
          {post.comments.length}
        </div>
        <div>
          <IconContext.Provider
            value={{ color: "grey", size: 75, className: "icon" }}
          >
            <FaHourglassHalf />
          </IconContext.Provider>
          <br />
          {getTimeFromPublish(post.date)}
        </div>
      </div>
      {showComments && (
        <div className="postCommentsBox">
          {post.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
