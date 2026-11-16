import React from "react";
interface SearchBoxProps {
  className?: string;
  children?: React.ReactNode;
}
export function SearchBox({ className = "", children }: SearchBoxProps) {
  return (
    <div className={`relative search-box ${className}`}>
      <svg
        className="absolute inset-y-2.5 inset-x-2.5  h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
        />
      </svg>
      <input
        type="Search"
        className="border-solid border w-full p-2 outline-0 border-gray-300 bg-gray-100 focus:bg-white  focus:border-gray-500 rounded-2xl pl-10"
      />
    </div>
  );
}
