import axios from "axios";
import React,{ useEffect, useState } from "react";

const baseURL = "https://fakestoreapi.com/products";

export default function App() {
  const [post, setPost] = useState(null);

useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return <p>null</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
