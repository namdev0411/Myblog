import batmanImg from "@/assets/img/batman.png";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import TextLink from "@/components/TextLink";

export type TPost = {
  id: string;
  title: string;
  tags: string[];
  createdDate: string;
  createdByName: string;
  createdById: string;
  contentBody: string;
};

type PostProps = {
  post: Omit<TPost, "contentBody">;
};

export default function Post({ post }: PostProps) {
  const { id, createdById, createdByName, createdDate, tags, title } = post;
  const tagList = tags.map((tag, index) => (
    <Tag key={index} className="mx-0.5" tagName={tag} />
  ));
  return (
    <Card>
      <div className="flex items-start space-x-4">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full"
            alt="User profile picture"
            src={batmanImg.src}
          />
        </span>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <TextLink href={createdById}>{createdByName}</TextLink>
              <p className="text-xs text-gray-500">{createdDate}</p>
            </div>
            {/* <TrashIcon /> delete icon */}
          </div>
          <div>
            <TextLink size="lg" href={`/post/${id}`}>
              {title}
            </TextLink>
          </div>
          <p className="mt-2 text-lg font-medium">{title}</p>
          {tagList}
          <div className="flex items-center justify-between mt-2">
            {/* <HeartIcon /> Like icon */}
            {/* <span className="text-sm text-gray-500">67</span> CountView */}
          </div>
        </div>
      </div>
    </Card>
  );
}
