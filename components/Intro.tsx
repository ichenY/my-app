import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Intro = () => {
  const [text, count] = useTypewriter({
    words: [" 👋 Hi, I am I-Chen"],
    delaySpeed: 2000,
    loop: 1,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="mx-12 mb-8 mt-8 lg:mb-0 lg:mt-0">
        <img
          src="https://github.com/ichenY.png"
          alt="PFP"
          className="h-80 w-80 rounded-full bg-verdant-bg-light "
        />
      </div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#1F4B68" />
      </h1>
      <h3>I am a Full Stack Engineer with 5+ years experience</h3>

      <div className="mx-auto self-start animate-bounce">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 512 512"
        >
          <path
            fill="#38bdf8"
            fillOpacity="40%"
            d="M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0
          01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"
          ></path>
          <path
            fill=" #093d8d"
            d="M313 182.57
          290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24
          0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
