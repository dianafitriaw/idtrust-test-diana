
"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu

  return (
    <nav className="w-full h-[80px] bg-whitegrey flex flex-row justify-between px-10 items-center font-outfit">
      <div className="flex flex-row items-center gap-10">
        <img src="/id.png" alt="logo" className="w-[40px] h-[40px]" />
        <input
          type="text"
          className="w-[250px] h-[44px] rounded-lg px-3 py-3 text-graynatural border-2 font-outfit border-graynatural"
          placeholder="Mau belajar apa hari ini?"
        />
      </div>
      <div className="hidden lg:flex flex-row gap-6 text-base font-medium text-darkblue items-center font-outfit">
        <Link href="">Program</Link>
        <Link href="">Corporate</Link>
        <Link href="">Tentang</Link>
        <button className="w-[102px] h-[48px] bg-darkblue2 hover:bg-darkblue text-white rounded-sm font-outfit">
          Masuk
        </button>
        <button className="w-[102px] h-[48px] font-outfit bg-white hover:bg-graynatural text-darkblue border-darkblue border-2 rounded-sm">
          Daftar
        </button>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-darkblue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[80px] font-outfit left-0 w-full bg-whitegrey flex flex-col items-start px-10 py-4 gap-4 text-darkblue text-base font-medium shadow-lg">
          <Link href="" className="w-full">
            Program
          </Link>
          <Link href="" className="w-full">
            Corporate
          </Link>
          <Link href="" className="w-full">
            Tentang
          </Link>
          <button className="w-full h-[48px] bg-darkblue2 hover:bg-darkblue text-white rounded-sm">
            Masuk
          </button>
          <button className="w-full h-[48px] bg-white hover:bg-graynatural text-darkblue border-darkblue border-2 rounded-sm">
            Daftar
          </button>
        </div>
      )}
    </nav>
  );
}
