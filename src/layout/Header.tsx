import React, { useState, useEffect } from "react";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
    // className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
    //   !top && "bg-white backdrop-blur-sm shadow-lg"
    // }`}
    >
      <div
        style={{
          backgroundColor: "#808080",
          height: "8vh",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginLeft: "22px",
            color: "#ff0",
            fontSize: "30px",
          }}
        >
          Pioneering Programmers Test App
        </div>
      </div>
    </header>
  );
}

export default Header;
