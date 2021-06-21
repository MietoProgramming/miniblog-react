import useState from "react";

export const Post = ({ post }) => {
  const showComments = () => {};

  const showTodo = () => {};

  return (
    <div>
      <div className="post" onClick={showComments()}>
        <div className="top">
          <img
            src={post.thumbnail_url}
            alt=""
            className="thumbnail"
            onClick={showTodo()}
          />
          <span className="name">Name Surname</span>
          <span>Title</span>
        </div>
        <div className="description">
          <p>{post.description}</p>
        </div>
      </div>
      <div className="onHoverPost">
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
