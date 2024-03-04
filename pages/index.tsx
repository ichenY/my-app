import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>I Chen's Portfolio</title>
      </Head>

      <Navbar />

      <section id="intro" className="snap-start">
        <Intro />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}
