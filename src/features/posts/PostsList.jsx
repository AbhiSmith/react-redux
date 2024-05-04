import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <artical key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
    </artical>
  ));

  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
