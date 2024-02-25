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
      className="z-50 fixed h-10 w-10 border-3 rounded-full bg-transparent bottom-6 right-6 p-1 hover:bg-slate-200 hover:boder-slate-200 dark:hover:bg-indigo-500 dark:hover:border-indigo-500"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ▲
    </button>
  );
};

export default HomeBtn;
