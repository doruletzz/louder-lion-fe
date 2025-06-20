import React from "react";

const SignInLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="bg-green-800 h-full min-h-dvh pt-2 text-black">{children}</div>;

export default SignInLayout;
