import Button from "@/components/Button";
import TextField from "@/components/TextField";
import Title from "@/components/Title";

export default function Signin() {
  return (
    <div className="min-w-128 w-2/5 bg-blue-200 rounded-lg px-20 py-10 mx-auto mt-16">
      <Title size="lg" className="text-center mb-5 font-light text-4xl">
        Blogにログイン
      </Title>
      <TextField
        className="mb-5"
        label="ユーザ名"
        type="password"
        helpText="この項目を入力してください。"
        isError
      />
      <TextField
        className="mb-10"
        label="パスワード"
        type="password"
        helpText="この項目を入力してください。"
        isError
      />

      <Button size="lg" className="w-full">
        ログイン
      </Button>
    </div>
  );
}
