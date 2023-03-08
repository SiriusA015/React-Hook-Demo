import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { selectTheme } from "store/theme";

function Header() {
  const [top, setTop] = useState(true);
  const isDark: any = useAppSelector(selectTheme);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header>
      <div
        style={{
          backgroundColor: isDark ? "#c0c0c0" : "#808080",
          height: "8vh",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginLeft: "22px",
            color: isDark ? "2f4f4f" : "#ff0",
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
