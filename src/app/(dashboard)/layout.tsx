import React from "react";
import Appbar from "./Appbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="flex gap-2 w-full bg-white h-full min-h-dvh pt-2 text-black">
    <Appbar />
    
    {children}
    
    </div>
);

export default DashboardLayout;
