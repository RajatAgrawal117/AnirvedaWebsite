import React from "react";

export default function About() {
  return (
    <div id="about" className="mt-12 overflow-hidden px-3 btwnMdAndLg:mt-20 btwnMdAndLg:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-black/90 to-black/80 py-16">
      <div className="text-center btwnMdAndLg:text-left">
      <h1 className="font-Bebas text-[5rem] uppercase leading-[6rem] text-primary xs:text-7xl xs:leading-none xl:text-[9rem] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Economania
        </h1>

        <h2 className="-mt-2 font-Abel text-4xl text-secondary btwnMdAndLg:text-3xl xl:text-4xl">
          Exploring the <span className="font-semibold text-primary">World</span> of <span className="font-semibold text-secondary">Economics</span>
        </h2>
        <p className="mx-auto mt-2 w-4/5 text-justify font-Abel text-base text-secondary btwnMdAndLg:mx-0 btwnMdAndLg:text-xl xl:w-3/5 xl:text-2xl leading-relaxed">
          Economania is Anirveda's flagship event that brings together students, professionals, and enthusiasts to explore the fascinating world of economics. Through interactive sessions, competitions, and workshops, we aim to foster economic awareness and financial literacy.
          <br /><br />
          Join us in this exciting journey to understand economic principles, discuss current financial trends, and develop practical skills for the real world.
        </p>
      </div>
    </div>
  );
}
