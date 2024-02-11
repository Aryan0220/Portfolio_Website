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
      className="scroll-up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ▲
    </button>
  );
};

export default HomeBtn;
