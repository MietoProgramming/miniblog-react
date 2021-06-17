export const Post = ({ post }) => {
  return (
    <div>
      <img src={post.thumbnail_url} alt="" />
      <span>Name Surname</span>
      <span>Title</span>
    </div>
  );
};
