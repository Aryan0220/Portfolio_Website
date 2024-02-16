import React, { useState } from "react";

const HomeBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      type="button"
      className="z-50 fixed h-10 w-10 border-3 rounded-full bg-transparent bottom-10 right-10 p-1 hover:bg-indigo-500 hover:border-indigo-500"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ▲
    </button>
  );
};

export default HomeBtn;
