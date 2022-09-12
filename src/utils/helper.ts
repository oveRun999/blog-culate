import { PostItem } from "@src/types";
import { blogUrl } from "@blogUrl";
import posts from "@.contents/posts.json";

// export function getMemberPostsById(id: string) {
//   return (posts as PostItem[]).filter((item) => item.authorId === id);
// }

export function getFaviconSrcFromOrigin(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
}
// export function getMemberPath(id: string) {
//   return `/blogUrl/${encodeURIComponent(id)}`;
// }
