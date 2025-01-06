"use client";

interface postProps {
  post: Post[];
}

interface Post {
  title: string;
  content: Content[];
  id: number;
}

interface Content {
  type: string;
  children: Children[];
}

interface Children {
  type: string;
  text: string;
}

export const Post = (props: postProps) => {
  const { post } = props;

  console.log(post[0]?.id);
  console.log(typeof post[0]?.id);

  return (
    <div>
      {post?.map((post) => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <div>
            {post.content.map(({ children }, index) => (
              <div key={index}>{children[index]?.text}</div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
