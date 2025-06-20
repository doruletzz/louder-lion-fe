import Image from "next/image";
import React from "react";
import Button from "../_components/Button";

const SignInPage = () => {
  return (
    <div className="group flex flex-col gap-2 max-w-xl mx-auto h-full bg-green-50 min-h-[calc(100vh_-_1rem)] pt-8 items-center rounded-3xl">
      <Image className="-my-6 scale-[98.5%] group-hover:scale-100 group-focus-within:scale-100 transition-transform duration-300 ease-in-out origin-bottom" alt="welcome" src="/main-photo.png" width={250} height={320} />
      <h1 className="text-3xl font-black max-w-sm text-center">
        Welcome To Louder Lion!
      </h1>
      <p className="text-lg opacity-75 max-w-sm text-center mb-2">Sign In Now to start improving your Pitch, This text will be longer</p>
      <Button className="tracking-wider px-8 max-w-sm w-full text-lg" variant="black">Using Google</Button>
    </div>
  );
};

export default SignInPage;
