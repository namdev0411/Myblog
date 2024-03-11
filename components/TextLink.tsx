import { ComponentProps, ReactNode } from "react";
import Title from "./Title";

type TextLinkSize = "sm" | "md" | "lg";

type TextLinkProps = ComponentProps<"a"> & {
  size?: TextLinkSize;
  children: ReactNode;
  href: string;
};

export default function TextLink(props: TextLinkProps) {
  const { size = "md", children, href } = props;
  return (
    <a {...props} href={href}>
      <Title className="inline" size={size}>
        {children}
      </Title>
    </a>
  );
}
