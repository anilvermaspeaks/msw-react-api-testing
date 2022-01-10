import React from "react";

export default function Post({post}) {
  return (
    <div className="column">
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.userId}</p>
      </div>
    </div>
  );
}
