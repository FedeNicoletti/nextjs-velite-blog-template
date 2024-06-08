"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Clients = () => {
  const [curr, setCurr] = useState(0);

  const images = ["/next.svg", "/imghero2.jpg", "/img300.png"];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="w-full my-12 h-24 bg-blue-400 flex justify-center items-center text-center rounded-xl">
        <h1 className="text-2xl w-full flex flex-col">
          <span className="text-xs text-white">
            {" "}
            WE DON&apos;T BUILD BODIES
          </span>
          <span className="text-white text-3xl">WE BUILD HABITS</span>
        </h1>
      </div>
      <div></div>{" "}
      <div
        className="w-screen overflow-hidden relative mb-12"
        style={{ height: "300px" }}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)`, height: "100%" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{ minWidth: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-7 h-1 bg-white rounded-full ${
                  curr === i ? "p-1" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
