import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Content2() {
  return (
    <div style={{ width: "80%", height: "100%", backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
        }}
      >
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
}
