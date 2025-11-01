import React from "react";

export default function PostItem({ post }) {
  const { title, body } = post;
  
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}