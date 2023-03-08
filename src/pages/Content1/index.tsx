import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Content1() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        border: "1px solid #808080",
        margin: "30px 0px 0px 30px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 50%",
          width: "100%",
        }}
      >
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
}
