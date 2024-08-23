'use client'
import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
    { href: "/events", label: "Events" },
    { href: "/membership", label: "Membership" },
  ];

  return (
    <html lang="en" className="noise-bg" >
      <body className="bg-[#120b04] bg-opacity-90">
        <main className="flex flex-col">
          <div className="w-full">
            <nav className="flex justify-between w-11/12 mx-auto py-14 ">
              <div className="text-3xl">UH<span className="font-[life] text-amber-500">NSBE</span></div>
              <div className="flex gap-8 text-neutral-400">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "text-white"
                        : ""
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          {children}

          <footer className="bg-black flex justify-center items-center p-8">
            <div className=" flex flex-col gap-3 w-11/12 items-center my-8 mb-16">
              <hr className="border-amber-500 border-t w-full mb-8" />
              <div className="text-3xl">UH<span className="font-[life] text-amber-500">NSBE</span></div>
              <p className="text-amber-500">National Society of Black Engineers | University of Houston Chapter</p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
