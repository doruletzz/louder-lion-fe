import React from "react";
import {
  House,
  CircleUser,
  Settings,
  Notebook,
  MessageSquare,
  TrendingUpDown,
  Swords,
} from "lucide-react";
import Button from "../_components/Button";
import Link from "next/link";

const Appbar = () => {
  return (
    <div className="flex md:flex-col md:gap-2 gap-6 p-3 md:rounded-3xl min-w-48 fixed md:left-3 md:bottom-3 md:top-3 bg-neutral-100 bottom-0 left-0 md:right-full right-0 md:justify-start justify-center z-40">
      <Button
        component={Link}
        href="/home"
        variant="general"
        className="text-lg md:px-4"
      >
        <House className="" />
        <span className="md:block hidden">Home</span>
      </Button>

      <Button variant="general" className="text-lg md:px-4">
        <CircleUser />
        <span className="md:block hidden">Profile</span>
      </Button>
      <Button variant="general" className="text-lg md:px-4">
        <TrendingUpDown />
        <span className="md:block hidden">Progress</span>
      </Button>
      <Button variant="general" className="text-lg md:px-4" disabled>
        <Swords />
        <span className="md:block hidden">Practice</span>
      </Button>
      <Button variant="general" className="text-lg md:px-4 mt-auto">
        <MessageSquare />
        <span className="md:block hidden">Feedback</span>
      </Button>
      <Button variant="general" className="text-lg md:px-4">
        <Settings />
        <span className="md:block hidden">Settings</span>
      </Button>
    </div>
  );
};

export default Appbar;
