import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

//searh

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();

  const postQuery = serchParams.get("post") || "";
  const latest = serchParams.has("latest");

  const startFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>our news</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/post/new">Add new post</Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startFrom
        )
        .map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};

export { Blogpage };
