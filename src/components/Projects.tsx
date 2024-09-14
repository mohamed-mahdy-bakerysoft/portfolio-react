import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen background-[#292929] items-center flex justify-center relative max-w-full mx-auto fle-col text-left md:flex-row">
      <h3 className="absolute tracking-[1.5rem] top-24 text-gray-500 uppercase">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap snap-mandatory z-20">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="h-screen w-screen flex-shrink-0 snap snap-center flex-col flex space-y-5 items-center justify-center "
            >
              <div className="space-y-10 px-0 ms:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className=" underline decoration-[#f7ab0a]/50 font-semibold">
                    Case study {i + 1} of {projects.length}: Ups clone
                  </span>
                </h4>{" "}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
