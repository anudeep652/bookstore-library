import React, { useEffect, useState } from "react";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";

const UpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      scrollY > lastScrollY ? setShowArrow(true) : setShowArrow(false);
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return (
    <>
      {showArrow && (
        <a href="#navbar">
          <KeyboardArrowUpTwoToneIcon
            className="uparrow"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            fontSize="large"
          />
        </a>
      )}
    </>
  );
};

export default UpArrow;
