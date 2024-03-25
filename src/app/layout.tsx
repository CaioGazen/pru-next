import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../../public/pru-high-resolution-logo.png";
import "./globals.css";
import "./normalize.css";
import "./style.css";
import { IoHome } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="h-32"></div>
        <div className="fixed top-0 start-0 z-50 flex flex-row h-24 bg-slate-400 shadow-2xl ">
          <div className="basis-1/12">
            <a href="./">
              <Image
                src={logo}
                alt=""
                className="object-contain object-left h-full "
              />
            </a>
          </div>
          <div className="basis-10/12 flex px-10 justify-start items-center space-x-8">
            <a
              href="./"
              className="p-4 align-middle w-auto h-auto shadow-2xl rounded-3xl bg-slate-300 hover:bg-black hover:text-white hover:rounded-sm transition-all duration-300 ease-linear"
            >
              <IoHome />
            </a>
            <a
              href="./compra"
              className="px-4 py-2 align-middle w-auto h-auto shadow-2xl rounded-3xl bg-slate-300 hover:bg-black hover:text-white hover:rounded-sm transition-all duration-300 ease-linear"
            >
              Finalizar Compra
            </a>
          </div>
          <div className="basis-1/12 flex justify-center my-auto mx-auto">
            <a
              href="./login"
              className="px-4 py-2 align-middle w-auto h-auto shadow-2xl rounded-3xl bg-slate-300 hover:bg-black hover:text-white hover:rounded-sm transition-all duration-300 ease-linear"
            >
              Fazer login
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
