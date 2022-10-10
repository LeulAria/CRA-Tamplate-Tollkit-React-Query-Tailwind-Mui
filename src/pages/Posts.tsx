import { getActiveProps } from "../utils";
import { LocationGenerics, PostType } from "../api/types";
import { Link, Outlet, useMatch } from "@tanstack/react-location";

const Posts = () => {
  const {
    data: { posts }
  } = useMatch<LocationGenerics>();

  return (
    <div>
      <div>
        {posts?.map((post: PostType) => {
          return (
            <div key={post.id}>
              <Link to={post.id} getActiveProps={getActiveProps}>
                <pre>{post.title}</pre>
              </Link>
            </div>
          );
        })}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Posts;
