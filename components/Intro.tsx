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
      <h3>I am a Full Stack Engineer with 4+ years experience...</h3>
    </div>
  );
};

export default Intro;
