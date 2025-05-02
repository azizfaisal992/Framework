import React from 'react'
import Button from '../shared/Button';


function Banner2() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-6">
        {/* Left Text Side (inside container) */}
        <div className="text-white max-w-xl w-full">
          <p className="text-orange-400 text-[20px] font-bold uppercase mb-2">WELCOME FRESHEAT</p>
          <h1 className="text-[70px] leading-tight font-extrabold mb-4">
            CHICAGO DEEP <br /> PIZZA KING
          </h1>
          <Button text="Order Now" />
        </div>
      </div>
      {/* Right Image Side (outside container) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-10 hidden md:block z-10">
        <div className="relative">
          <img
            src="/pizza.png"
            alt="Pizza"
            className="w-[800px] object-contain"
          />
          <div className="absolute top-6 left-6 bg-yellow-400 text-black font-extrabold text-xl px-4 py-2 rounded-full">
            50% OFF
          </div>
          {/* <img
            src="/tomato.png"
            alt="Tomato Slices"
            className="absolute top-0 right-0 w-[100px] animate-bounce"
          /> */}
          
        </div>
      </div>
    </div>
  );
}

export default Banner2
