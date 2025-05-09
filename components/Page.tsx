import React from "react";
import AppFooter from "./Footer";
import AppNavbar from "./Navbar";

interface PageProps {
  children: React.ReactNode,
  className?: string
}
export default function Page({
  children, className = ""
}: Readonly<PageProps>) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <AppNavbar/>
        <div className={`grow max-w-5xl w-full mx-auto p-2 sm:p-4 md:p-8 ${className}`}>
            {children}
        </div>
        <AppFooter/>
    </div>
  );
}