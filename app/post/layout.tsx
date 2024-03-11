import { ReactNode } from "react";

const PostLayout = ({ children }: { children: ReactNode }) => {
  return <div className="m-auto mt-8 bg-white">{children}</div>;
};
export default PostLayout;
