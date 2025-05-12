import React from "react";
import AppFooter from "./Footer";
import AppNavbar from "./Navbar";
import { mapPropsVariants } from "@heroui/react";

interface PageProps {
  heading?: string,
  children: React.ReactNode,
  className?: string
}
export default function Page({
  heading, children, className = ""
}: Readonly<PageProps>) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <AppNavbar/>
        <div className={`grow max-w-5xl w-full mx-auto p-2 sm:p-4 md:p-8 ${className}`}>
          {heading && (
            <h1 className="text-md font-semibold uppercase">
              {heading}
            </h1>
          )}
          {children}
        </div>
        <AppFooter/>
    </div>
  );
}