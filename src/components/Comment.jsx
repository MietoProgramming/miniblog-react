import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="top">
        <div className="name">{comment.email}</div>
        <span className="title">{comment.name}</span>
      </div>
      <hr />
      <div className="description">
        <p>{comment.body}</p>
      </div>
    </div>
  );
};
