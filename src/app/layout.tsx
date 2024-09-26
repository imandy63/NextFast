"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FcmTokenComp from "../components/foreground";
import { Sidebar } from "./components/Sidebar";
import store from "@/redux/storejs";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Cookies from "@/utils/cookie";
import { removeToken } from "@/apiCall/user";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <Sidebar /> */}
          {children}
        </body>
      </Provider>
    </html>
  );
}
