import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" hidden sm:block absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col items-center md:flex-row md:items-start space-y-5 md:space-y-0 md:space-x-10 pt-20">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
          }}
          src="../me.jpg"
          alt=""
          className=" w-[10rem] h-[10rem] mb-4 md:mb-0 flex-shrink-0 xs:relative rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[10rem] xl:h-[10rem]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            This is where you can add your background information. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
