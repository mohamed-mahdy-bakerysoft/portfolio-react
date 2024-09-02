import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/linkedin";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="sticky top-0 flex items-start justify-between max-w-5xl mx-auto xl:items-center z-20   ">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/vladimir-ivanov-dev/"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/vladimir-ivanov-dev/"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/vladimir-ivanov-dev/"
            fgColor="grey"
            bgColor="transparent"
          />
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="grey"
            bgColor="transparent"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-grey-400 text-sm">
            Get in touch
          </p>
        </motion.div>
      </header>
    </>
  );
}
