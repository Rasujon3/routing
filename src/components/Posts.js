import React, { Component } from "react";

function Posts(props) {
  return (
    <div>
      <h1>Posts</h1>
      <span> {props.match.params.year} </span>
      <span> {props.match.params.month} </span>
    </div>
  );
}

export default Posts;
