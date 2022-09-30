import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";

const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <div>
        <button onClick={goBack} className="btn btn-primary">
          go back
        </button>
        <button onClick={goHome} className="btn btn-primary">
          Home
        </button>
      </div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/post/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export { Singlepage };
