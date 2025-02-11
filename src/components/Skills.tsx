import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="items-center justify-evenly relative h-screen text-center md:text-left md:flex-row xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto flex flex-col space-y-5 snap-x"
    >
      <h3 className="absolute top-24 text-gray-500 tracking-[1rem] text-2xl uppercase underline  hover:decoration-orange">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for current proficiency
      </h3>
      <div className="absolute top-44 grid grid-cols-4 gap-5 my-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
