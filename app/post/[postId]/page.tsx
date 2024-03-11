import batmanImg from "@/assets/img/batman.png";
import Card from "@/components/Card";
import ShowError from "@/components/ShowError";
import Tag from "@/components/Tag";
import TextLink from "@/components/TextLink";
import Title from "@/components/Title";
import { isBodyContainData } from "@/utils/type";
import { TPost } from "../(components)/Post";
import { fetchPostById } from "../(services)/fetchPostById";

type PostDetailProps = {
  params: {
    postId: string;
  };
};

export default async function PostDetail(props: PostDetailProps) {
  const { postId } = props.params;

  const res = await fetchPostById(postId);

  if (isBodyContainData<TPost>(res)) {
    const post = res.data;
    return (
      <div>
        <PostDetailBody {...post} />
      </div>
    );
  }

  return (
    <div className="text-4xl min-h-64 p-4">
      <ShowError errors={res.errors} />
    </div>
  );
}

type PostDetailBodyProps = TPost & {};

function PostDetailBody(props: PostDetailBodyProps) {
  const { title, tags, contentBody, createdById, createdByName, createdDate } =
    props;
  const tagList = tags.map((tag, index) => (
    <Tag key={index} className="mx-0.5" tagName={tag} />
  ));

  return (
    <Card>
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <img
                  className="aspect-square h-full w-full"
                  alt="User profile picture"
                  src={batmanImg.src}
                />
              </span>
              <TextLink href={createdById}>{createdByName}</TextLink>
            </div>
            <p className="text-md text-gray-500">{createdDate}</p>
          </div>
          <div>
            <Title size="lg">{title}</Title>
          </div>
          <p className="mt-2 text-lg font-medium">{title}</p>
          {tagList}
        </div>
      </div>
      <div className="mt-10">
        <div
          dangerouslySetInnerHTML={{
            __html: contentBody,
          }}
        />
      </div>
    </Card>
  );
}
