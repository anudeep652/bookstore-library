import React, { useEffect, useState } from "react";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import { Link, NavLink, useParams } from "react-router-dom";

interface scrollStatus {
  scrollDirection: string | null;
  scrollPos: number;
}
const UpArrow = () => {
  const { bookName } = useParams();
  const [scrollStatus, setScrollStatus] = useState<scrollStatus>({
    scrollDirection: null,
    scrollPos: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, [bookName]);

  function handleScrollDocument() {
    setScrollStatus((prev) => {
      // to get 'previous' value of state

      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",

        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }

  return (
    <>
      {scrollStatus.scrollDirection === "up" && (
        <Link to="#navbar">
          <KeyboardArrowUpTwoToneIcon
            className="uparrow"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            fontSize="large"
          />
        </Link>
      )}
    </>
  );
};

export default UpArrow;
