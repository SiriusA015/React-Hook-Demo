import { Link } from "react-router-dom";

export default function SideBar() {
  const Button1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #111111",
    borderRadius: "20px",
    cursor: "pointer",
    "&:hover, &:focus": { borderColor: "#FF0000" },
    TextDecoder: "none",
  };
  const Button2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #111111",
    borderRadius: "20px",
    cursor: "pointer",
    marginTop: "30px",
    "&:hover, &:focus": { borderColor: "#FF0000" },
  };

  return (
    <div style={{ width: "20%", height: "100%", backgroundColor: " #cecece" }}>
      <div
        style={{
          marginTop: "100px",
          minHeight: "87vh",
          padding: "30px",
        }}
      >
        <Link
          style={Button1}
          to="page-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page 1
        </Link>
        <Link
          style={Button2}
          to="page-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page 2
        </Link>
      </div>
    </div>
  );
}
