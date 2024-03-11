import controller from "./(controller)/postController";

export async function GET() {
  const result = controller.getPostList();

  return Response.json(result);
}
