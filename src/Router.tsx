import React from "react";

import App from "./App";

// page imports
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import PostsIndex from "./pages/PostsIndex";

import { getActiveProps } from "./utils";
import { fetchPostById, fetchPosts } from "./api";
import { Link, Outlet, Router, ReactLocation } from "@tanstack/react-location";

const location = new ReactLocation();

const RouterView = () => {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <App /> },
        {
          path: "posts",
          element: <Posts />,
          loader: async () => {
            return {
              posts: await fetchPosts()
            };
          },
          children: [
            { path: "/", element: <PostsIndex /> },
            {
              path: ":postId",
              element: <Post />,
              loader: async ({ params: { postId } }) => {
                return {
                  post: await fetchPostById(postId)
                };
              }
            }
          ]
        }
      ]}
    >
      <div>
        <Link
          to="/"
          getActiveProps={getActiveProps}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link to="posts" getActiveProps={getActiveProps}>
          Posts
        </Link>
      </div>
      <hr />
      <Outlet />
    </Router>
  );
};

export default RouterView;
