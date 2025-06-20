import Button from "@/app/_components/Button";
import { Mic, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import MediaUpload from "./MediaUpload";

const HomePage = () => {
  return (
    <div className="max-w-2xl mx-auto w-full p-3 flex flex-col items-center h-full min-h-[calc(100dvh_-_1rem)]">
      {/* <h1 className='text-4xl font-black'>Action</h1> */}
      <span className="flex gap-2 items-center mt-12">
        <Image
          className="-mt-12"
          alt="action"
          src="/main-photo.png"
          width={150}
          height={320}
        />
        <div>
          <h1 className="text-4xl font-black">Upload Your Pitch</h1>
          <p className="text-lg leading-loose mb-2">
            Or Just Record It Straight Away
          </p>
        </div>
      </span>
      <Button variant="black" className="p-12 scale-40 border-b-[12px] pb-9">
        <Mic className="size-16" />
      </Button>
      <MediaUpload />
    </div>
  );
};

export default HomePage;
