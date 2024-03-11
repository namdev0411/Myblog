import { ComponentProps } from "react";

type CardProps = ComponentProps<"div">;

export default function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={`${
        props.className ?? "p-6 bg-white rounded-lg shadow text-black"
      }`}
    >
      {props.children}
    </div>
  );
}
