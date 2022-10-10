import React from "react";
import { LocationGenerics } from "../api/types";
import { useMatch } from "@tanstack/react-location";

const Post = () => {
  const {
    data: { post }
  } = useMatch<LocationGenerics>();

  return (
    <div>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;
