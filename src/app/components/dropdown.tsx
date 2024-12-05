"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full md:w-[560px] px-4 py-2 bg-white text-graynatural font-medium font-outfit border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        Pilih Kategori
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-auto text-graynatural"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full md:w-[560px] bg-white rounded-md shadow-lg overflow-hidden z-20 border border-graynatural">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-graynatural hover:bg-gray-100"
          >
            Langganan
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-graynatural hover:bg-gray-100"
          >
            Corporate
          </a>
        </div>
      )}
    </div>
  );
}
