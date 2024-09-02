import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["My name is", "some dynamic value", "..."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-52">
      <BackgroundCircles />
      <img
        src="/me.jpg"
        alt="me"
        className="rounded-full relative h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 p-2 z-20">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7aboa" cursorBlinking={true} />
        </h1>
      </div>
      <div className="">
        <a href="#about" className="p-5">
          <button className="heroBotton">About</button>
        </a>
        <a href="#exp" className="p-5">
          <button className="heroBotton">Experience</button>
        </a>
        <a href="#projects" className="p-5">
          <button className="heroBotton">Projects</button>
        </a>
      </div>
    </div>
  );
}
