import { redirect } from "next/navigation";

export default function Home() {
  redirect('/home');

  return (
    <div className="flex">
      <h1 className="text-2xl font-bold">

     Welcom!
      </h1>
    </div>
  );
}
