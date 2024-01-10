import React, { useEffect, useState } from "react";
import "./scrollToTopButton.css";

function scrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const onScroll = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={(showButton ? "showButton" : "") + " topButton"}
      onClick={scrollToTop}
    >
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  );
}

export default scrollToTopButton;
