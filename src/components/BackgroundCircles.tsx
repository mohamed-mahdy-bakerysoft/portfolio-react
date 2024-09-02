import { motion } from "framer-motion";
type Props = {};
export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%, 20%, 50%, 80%, 20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-20"
    >
      <div className="absolute border border-[#3333333] rounded-full h-[10rem] w-[10rem] mt-52 animate-ping-slow" />

      <div className="absolute border border-[#F7ABBA] opacity-20 rounded-full h-[20rem] w-[20rem] mt-52 animate-pulse" />
      {/* <div className="absolute border border-[#3333333] rounded-full h-[880px] w-[880px] mt-52 " /> */}
    </motion.div>
  );
}
