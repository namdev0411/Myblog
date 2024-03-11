import { ApiRequest, axiosClient } from "@/utils/axiosClient";
import { buildApiPath } from "@/utils/buildApiPath";
import { isUnexpectedError } from "@/utils/type";
import { TPost } from "../(components)/Post";

export async function fetchPostById(postId: string) {
  const client = axiosClient<TPost>();
  const url = buildApiPath(["post/", postId]);
  const apiRequest: ApiRequest = {
    method: "GET",
    url,
  };
  const res = await client.request(apiRequest);

  if (isUnexpectedError(res)) {
    throw new Error("想定外のエラーが発生しました。");
  }

  return res;
}
