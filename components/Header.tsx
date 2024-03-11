"use client";
import Link from "next/link";
import { ComponentProps } from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";

export type HeaderProps = ComponentProps<"div">;

export default function Header(props: HeaderProps) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`${className ?? ""} flex flex-row justify-between`}
    >
      <div>
        <Link href="/" className="text-4xl">
          Home
        </Link>
      </div>
      {/* <Link href="/signin"> */}
      <Button onClick={() => signIn()}>ログイン</Button>
      {/* </Link> */}
    </div>
  );
}
