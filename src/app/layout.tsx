'use client';
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from '@iconify/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/membership", label: "Membership" },
    { href: "/partners", label: "Partners" },
    { href: "/portal", label: "Portal" },
  ];

  const isAppPath = pathname === "/app";

  return (
    <html lang="en" className="noise-bg">
      <head>
        <link href="https://fonts.cdnfonts.com/css/gt-eesti-display-trial" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/gloock-2" rel="stylesheet"/>
      </head>
      <body className="bg-[#e6e6e6] bg-opacity-90 mx-auto"> {/* bg-[#3a1d00]  */}
        <main className="flex flex-col">
          {!isAppPath && (
            <div className="w-full">
              <nav className="flex justify-between w-11/12 mx-auto py-14 relative">
                <div className="text-3xl flex justify-center items-center">
                  <div className="w-40 md:w-48 h-auto"><Image className="invert" src="/NSBE-General-White.png" alt="NSBE LOGO" width={250} height={250}/></div>
                  <div className="w-12 md:w-16 h-auto border-l-2 border-black pl-2">
                    <svg viewBox="0 0 552 465" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#e61d3b" d="M0,0H171V91H145V157H239V91.00H213.51V0H384V91H357V157H489V248H462V374H489V465H319V375H344V358H252V375H278V465H107V375H134V302H79L27.5 255V91H0Z" />
                      <path fill="#fffcfc" d="M 13 13H158V78H132V170H252V78H226.5V13H371.5V78H344V170H476V235.5H449V387.5H476.5V452.5H331.5V387.5H357V345H239V387.5H265V452.5H119.5V387.5H147V287.5H83L40.50 251V78H13Z" />
                      <path fill="#e61d3b" d="M25 25H146V66H120V235H147.5V277H90L53 245V66H25ZM239 25H359V66H332V245L294 277H238V235H264V66H239V25ZM344 183H464V223H437V400H464V440H344V400H370V333H227V400H252V440H132V400H160V223H132V182.5H252.5V223H227V289H369.5V223.5H344ZM317 276L356 241V276Z" />
                      <path fill="#e61d3b" d="M506 445H523V449.75H517.25V465H511.75V449.75H506ZM526 445H534.9L538.71 454.28L543.08 445H551.75V465L546.25 465V449.75L540.84 460.85L536.62 460.58L531.33 449.10V465L526 465Z" id="TM"/>
                    </svg>
                  </div>
                </div>
                
                {/* Hamburger Icon */}
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                      <Icon icon="mdi:close" width={40} height={40} />
                    ) : (
                      <Icon icon="mdi:menu" width={40} height={40} />
                    )}
                  </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-8 text-neutral-500">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-black underline flex items-center"
                          : "flex items-center"
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                  <div className="flex flex-col gap-4 text-neutral-400 bg-black p-8 absolute top-32 left-0 right-0 mx-auto lg:hidden z-20">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={
                          pathname === item.href
                            ? "text-white underline"
                            : ""
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </nav>
            </div>
          )}
          {children}

          {!isAppPath && (
            <footer className="bg-black flex justify-center items-center py-8 w-full">
              <div className=" flex flex-col gap-3 w-11/12 items-center my-8 mb-16">
                <hr className="border-amber-500 border-t w-full mb-8" />
                <div className="text-3xl flex justify-center items-center">
                  <div className="w-40 md:w-48h-auto"><Image className="" src="/NSBE-General-White.png" alt="NSBE LOGO" width={250} height={250}/></div>
                  <div className=" w-12 md:w-16 h-auto border-l-2 border-white pl-2">
                    <svg viewBox="0 0 552 465" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#e61d3b" d="M0,0H171V91H145V157H239V91.00H213.51V0H384V91H357V157H489V248H462V374H489V465H319V375H344V358H252V375H278V465H107V375H134V302H79L27.5 255V91H0Z" />
                      <path fill="#fffcfc" d="M 13 13H158V78H132V170H252V78H226.5V13H371.5V78H344V170H476V235.5H449V387.5H476.5V452.5H331.5V387.5H357V345H239V387.5H265V452.5H119.5V387.5H147V287.5H83L40.50 251V78H13Z" />
                      <path fill="#e61d3b" d="M25 25H146V66H120V235H147.5V277H90L53 245V66H25ZM239 25H359V66H332V245L294 277H238V235H264V66H239V25ZM344 183H464V223H437V400H464V440H344V400H370V333H227V400H252V440H132V400H160V223H132V182.5H252.5V223H227V289H369.5V223.5H344ZM317 276L356 241V276Z" />
                      <path fill="#e61d3b" d="M506 445H523V449.75H517.25V465H511.75V449.75H506ZM526 445H534.9L538.71 454.28L543.08 445H551.75V465L546.25 465V449.75L540.84 460.85L536.62 460.58L531.33 449.10V465L526 465Z" id="TM"/>
                    </svg>
                  </div>
                </div>
                <p className="text-amber-500 text-xs md:text-base">
                  National Society of Black Engineers | University of Houston Chapter
                </p>
              </div>
            </footer>
          )}
        </main>
      </body>
    </html>
  );
}
