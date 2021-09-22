import React from "react";
import { useState } from "react";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white shadow">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center p-2 justify-between px-4 py-4 lg:py-0 shadow lg:shadow-none">
          <div>
            <a
              className="uppercase font-semibold text-black text-1x1 p-2"
              href={0}
            >
              AMAZING CONSULTING
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-black block lg:hidden hover:text-green-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />

                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center w-full py-4 lg:py-0`}
        >
          <div className="flex flex-col lg:flex-row">
            <a
              href={0}
              className="block px-4 py-5 text-black font-semibold hover:text-green-300"
            >
              About Us
            </a>
            <a
              href={0}
              className="block px-4 py-5 text-black font-semibold hover:text-green-300"
            >
              Our Services
            </a>
            <a
              href={0}
              className="block px-4 py-5 text-black font-semibold hover:text-green-300"
            >
              Our Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
