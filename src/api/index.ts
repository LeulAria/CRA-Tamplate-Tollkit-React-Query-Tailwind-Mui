import axios from "axios";

export async function fetchPosts() {
  await new Promise((r) => setTimeout(r, 300));
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.data.slice(0, 5));
}

export async function fetchPostById(postId: string) {
  await new Promise((r) => setTimeout(r, 300));

  return await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data);
}
