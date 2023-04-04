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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#5DADE2" />
      </h1>
      <h3>I am a Full Stack Engineer with 3+ years experience</h3>
    </div>
  );
};

export default Intro;
