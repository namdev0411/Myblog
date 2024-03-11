import { ComponentProps } from "react";

type TitleSize = "sm" | "md" | "lg";

type TitleProps = ComponentProps<"p"> & {
  size?: TitleSize;
};

const sizeStyle: {
  [key in TitleSize]: string;
} = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-2xl font-bold",
};

export default function Title(props: TitleProps) {
  const { size = "md", children, className } = props;

  return (
    <p {...props} className={`${sizeStyle[size]} ${className ?? ""}`}>
      {children}
    </p>
  );
}
