import { ComponentProps } from "react";

type TagProps = ComponentProps<"span"> & {
  tagName: string;
};

export default function Tag({ className, tagName }: TagProps) {
  return (
    <span className={`${className ?? ""} bg-gray-300 rounded`}>{tagName}</span>
  );
}
