import React from "react";
import Hero from "./images/Hero.jpg";

function HeroComponent() {
  return (
    <div className="w-full z-index-0">
      <div className="flex justify-between gap-4 items-center text-center px-8 md:px-12 lg:text-left lg:w-3/4">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            AMAZING GLOBAL
            <span className="text-green-300 font-bold">CONSULTING</span>
          </h2>
          <p className="pt-4">
            Nisi tempor velit aliqua elit veniam consequat deserunt nulla sint.
            Pariatur esse eiusmod pariatur elit Lorem duis quis tempor non. Qui
            cillum amet qui cillum ad do amet. Non Lorem incididunt sit est aute
            eiusmod do sit qui nostrud consequat deserunt adipisicing ad.
          </p>
          <div className="flex gap-2 pt-4 object-center">
            <button className="bg-green-300 text-white font-semibold p-2 block rounded hover:bg-green-500">
              Get Started
            </button>

            <button className="flex bg-gray-400 text-white font-semibold p-2 block rounded hover:bg-gray-600">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden lg:block h-screen lg:w-5/4 lg:flex lg:items-stretch">
          <img className="h-screen" src={Hero} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
