import useState from "react";

export const Post = ({ post, setTodos, user }) => {
  const showComments = () => {};

  const showTodo = () => {
    setTodos(user);
  };

  const onPostHover = (hover) => {};

  return (
    <div>
      <div className="post" onClick={showComments()}>
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
      <div className="onHoverPost" onMouseEnter={onPostHover(true)}>
        <div>
          <img src="" alt="Likes" />
          96
        </div>
        <div>
          <img src="" alt="Comments" />
          13
        </div>
        <div>
          {" "}
          <img src="" alt="Time since upload" />
          2h{" "}
        </div>
      </div>
    </div>
  );
};
