import { useRef, useState, useEffect } from "react";

import ScrollItem from "./ScrollItem.tsx";
type Props = {};

function ScrollContainer({}: Props) {
  const itemRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      const scrollEl = itemRef.current;
      scrollEl?.scroll({
        top: scrollEl?.scrollHeight,
        behavior: "smooth",
      });
      scrollToBottom();
    };
  }, []);
  return (
    <div
      ref={itemRef}
      className="h-screen bg-gray-500 flex flex-row gap-2 overflow-x-scroll flex-wrap"
    >
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
      <ScrollItem />
    </div>
  );
}

export default ScrollContainer;
