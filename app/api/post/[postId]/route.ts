import controller from "../(controller)/postController";

interface PathParams<T> {
  params: T;
}

type PostPathParams = PathParams<{
  postId: string;
}>;

export function GET(_req: Request, { params }: PostPathParams) {
  const result = controller.getPostDetail(params.postId);

  // return new Response("Error", {
  //   status: 400,
  // });
  return Response.json(result);
}
