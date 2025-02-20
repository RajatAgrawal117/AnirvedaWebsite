import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl px-3 text-center py-16 bg-gradient-to-b from-black via-black/90 to-black/80 flex flex-col items-center"
      >
        <motion.h1 
          className="font-Bebas text-[5rem] uppercase leading-[6rem] text-primary xs:text-7xl xs:leading-none xl:text-[9rem] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Economania
        </motion.h1>

        <motion.h2 
          className="-mt-2 font-Abel text-4xl text-secondary btwnMdAndLg:text-3xl xl:text-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Unleashing Innovation in <span className="font-semibold text-primary">Economics</span> & <span className="font-semibold text-secondary">Technology</span>
        </motion.h2>
        
        <motion.p 
          className="mx-auto mt-2 w-full max-w-3xl text-center text-justify font-Abel text-base text-secondary btwnMdAndLg:text-xl xl:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="text-primary font-semibold">Economania</span> is <span className="text-secondary font-semibold">Anirveda's premier 3-day fest</span>, bringing together the brightest minds in economics and technology. With a dynamic mix of <span className="text-primary font-semibold">technical competitions</span>, <span className="text-secondary font-semibold"> hackathons</span>, and <span className="text-primary font-semibold">insightful speaker sessions</span>, Economania provides a chance to explore the intersection of economics, technology, and innovation.
          <br /><br />
          Engage in hands-on challenges, collaborate with industry leaders, and develop real-world skills in this electrifying festival.<span className="text-primary font-semibold"> Economania</span> promises an enriching experience filled with learning, networking, and groundbreaking ideas.
        </motion.p>
      </motion.div>
    </div>
  );
}
