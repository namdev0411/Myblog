import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "sm" | "md" | "lg";
const baseStyle =
  "font-semibold rounded-md shadow focus:opacity-90 hover:opacity-90";
const variantStyle: {
  [key in ButtonVariant]: string;
} = {
  primary: "bg-indigo-500 text-white text-sm",
  secondary: "",
  link: "",
};
const sizeStyle: {
  [key in ButtonSize]: string;
} = {
  sm: "py-4 px-5",
  md: "py-4 px-6 ",
  lg: "py-4 px-7 ",
};
export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    ...rest
  } = props;
  return (
    <button
      {...rest}
      className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]} ${
        className ?? ""
      } `}
    >
      {children}
    </button>
  );
}
