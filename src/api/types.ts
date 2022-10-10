import { MakeGenerics } from "@tanstack/react-location";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    posts: PostType[];
    post: PostType;
  };
}>;
