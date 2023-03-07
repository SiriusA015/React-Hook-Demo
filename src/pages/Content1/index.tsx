import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Content1() {
  return (
    <div style={{ width: "80%", height: "100%", backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          // minHeight: "100vh",
        }}
      >
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
}
