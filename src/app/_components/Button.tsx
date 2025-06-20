"use client";

import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { cn } from "@/app/_utils/cn";

type Props<T extends React.ElementType> = {
  id?: string;
  style?: CSSProperties;
  glow?: boolean;
  variant?: "general" | "red" | "black" | "secondary" | "default";
  disabled?: boolean;
  component?: T;
  className?: string;
  onClick?: MouseEventHandler;
} & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType>(
  props: Props<T> & PropsWithChildren
) => {
  const {
    children,
    component,
    variant,
    className,
    onClick,
    style,
    id,
    glow = false,
    ...otherProps
  } = props;

  const OverridenComponent = component || "button";

  return (
    <OverridenComponent
      style={style}
      id={id}
      aria-label={id}
      onClick={onClick}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      className={cn(
        "disabled:cursor-not-allowed font-bold outline-none hover:cursor-pointer focus:-translate-y-0.5 hover:-translate-y-0.5 flex gap-2 items-center transition-[transform_background] duration-500 disabled:opacity-50 disabled:backdrop-blur-xl",
        glow &&
          "border-neutral-200 dark:border-neutral-400 dark:shadow-indigo-700/20 dark:shadow-xl shadow-indigo-300/20 shadow-xl border disabled:shadow-none",
        variant === "red" &&
          "py-2 px-3.5 bg-red-600 border-blue-800/10 border-b-4 hover:bg-red-700 focus:bg-red-700 focus:shadow-sm justify-center text-red-200 hover:text-red-100  focus:text-red-100 rounded-3xl text-sm font-medium",
         variant === "black" &&
          "py-2 px-3.5 bg-neutral-800 border-neutral-700 border-b-4 hover:bg-neutral-700 focus:bg-neutral-700 focus:shadow-sm justify-center text-neutral-200 hover:text-neutral-100  focus:text-neutral-100 rounded-2xl text-sm font-medium",
        variant === "general" &&
          "p-2 gap-3 text-sm hover:bg-neutral-200 focus:bg-neutral-200 rounded-full",
        variant === "secondary" &&
          "py-2 px-3.5 font-medium rounded-full border-b-6 dark:bg-neutral-900 dark:bg-opacity-50 bg-opacity-75 border-black dark:border-opacity-10 text-sm hover:bg-opacity-90 dark:border-white border-opacity-50 justify-center backdrop-blur-sm bg-neutral-100",
        className
      )}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default Button;
