import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>I Chen's Portfolio</title>
      </Head>

      <Navbar />
      <section id="intro" className="snap-center">
        <Intro />
      </section>
    </div>
  );
}
