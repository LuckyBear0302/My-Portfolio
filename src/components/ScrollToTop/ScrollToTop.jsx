import React, { useEffect, useState } from "react";

import "./ScrolToTop.css";

const ScrollToTop = () => {
  const [backToTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButton && (
        <button className="cm-up" onClick={ScrollUp}>
          <span className="cm-icon">
            <i className="fas fa-chevron-up"></i>
          </span>
        </button>
      )}
    </div>
  );
};

export default React.memo(ScrollToTop);
