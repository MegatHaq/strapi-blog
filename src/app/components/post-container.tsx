import { Post } from "./post";

export const PostContainer = async () => {
  const data = await fetch("http://localhost:1337/api/posts");
  const posts = await data.json();
  return (
    <div>
      <Post post={posts?.data} />
    </div>
  );
};
