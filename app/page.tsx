import TextField from "@/components/TextField";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("session ?? ", session);
  return (
    <main>
      <div>
        <TextField label="ユーザ名" type="password" />
        <TextField
          label="パスワード"
          type="password"
          helpText="この項目を入力してください。"
          isError
        />
      </div>
    </main>
  );
}
