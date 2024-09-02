import { motion } from "framer-motion";
type Props = {};
import { useRef, useEffect } from "react";

function ExpCard({}: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const handleClick = () => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log('Card ref curent',cardRef.current);
  };

  useEffect(() => {
    if (cardRef.current) {
      console.log("Card ref is set:", cardRef.current); // This should log the article element
    } else {
      console.log("Card ref is null"); // This will log if ref is null
    }
  }, []);

  return (
    <article
      onClick={handleClick}
      ref={cardRef}
      className=" mt-5 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
    >
      <img
        className=" w-32 h-32 m-5 rounded-full xl:h-[200px] object-cover object-center"
        src="../me.jpg"
        alt="me"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl">Job Title</h4>
        <p className="p-0 font-bold text-2xl mt-1">Companies</p>
        <div className="p-0 flex space-x-2 mt-1"> TEch used</div>
        <p className="p-0 uppercase py-5 text-gray-300">
          Started work... - Emded
        </p>
        <ul className="list-disc space-y-4 text-lg">
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </div>
    </article>
  );
}

export default ExpCard;
