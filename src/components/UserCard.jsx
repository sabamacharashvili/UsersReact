import React, { useState } from "react";
import PostList from "./PostList.jsx";

export default function UserCard({ user }) {
  const { id, name, email, phone } = user;
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px 0" }}>
      <h3>👤 {name}</h3>
      <p>📧 {email}</p>
      <p>📞 {phone}</p>

      <button onClick={() => setShowPosts((s) => !s)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {showPosts && <PostList userId={id} />}
    </div>
  );
}