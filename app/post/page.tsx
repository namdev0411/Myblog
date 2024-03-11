import ShowError from "@/components/ShowError";
import { isBodyContainData } from "@/utils/type";
import Post, { TPost } from "./(components)/Post";
import { fetchPostList } from "./(services)/fetchPostList";

export default async function PostPage() {
  const res = await fetchPostList();

  if (isBodyContainData<TPost[]>(res)) {
    const postList = res.data;
    const postListElement = postList.map((post) => (
      <Post key={post.id} post={post} />
    ));
    return <div>{postListElement}</div>;
  }

  return (
    <div className="text-4xl min-h-64">
      <ShowError errors={res.errors} />
    </div>
  );
}
