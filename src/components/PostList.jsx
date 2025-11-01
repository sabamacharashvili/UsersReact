import React, { useEffect, useState } from "react";
import PostItem from "./PostItem.jsx";

export default function PostList({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await res.json();
      setPosts(data);
    }
    loadPosts();
  }, [userId]);

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Posts:</h4>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}