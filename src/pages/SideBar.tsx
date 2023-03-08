import "./sideStyle.css";
import { FcAdvance } from "react-icons/fc";
import { BiCollapseHorizontal } from "react-icons/bi";
import { useAppDispatch } from "store/hooks";
import { changeCollapse } from "store/sideBar";
import useGetCollapseState from "hooks/useGetCollapseState";

const Button1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover, &:focus": { border: "#FF0000" },
  gap: "20px",
  color: "#2f4f4f",
  border: "1px solid #2f4f4f",
  borderRadius: "15px",
  padding: "10px 0",
};
const Button2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginTop: "30px",
  "&:hover, &:focus": { borderColor: "#FF0000" },
  gap: "20px",
  color: "#2f4f4f",
  border: "1px solid #2f4f4f",
  borderRadius: "15px",
  padding: "10px 0",
};

const SideBar = () => {
  const dispatch = useAppDispatch();
  const { isCollapse } = useGetCollapseState();

  const collapse = () => {
    return dispatch(
      changeCollapse({
        isCollapsed: !isCollapse,
      })
    );
  };
  return (
    <div
      style={{
        width: isCollapse ? "5%" : "15%",
        backgroundColor: "#cecece",
        position: "relative",
      }}
    >
      <BiCollapseHorizontal
        style={{
          position: "absolute",
          top: "20px",
          left: "30px",
          cursor: "pointer",
        }}
        size={20}
        onClick={collapse}
      />
      <div
        style={{
          marginTop: "130px",
          // minHeight: "87vh",
          padding: "20px",
        }}
      >
        <div
          style={Button1}
          onClick={() => {
            // navigate("/page-1");
            window.open("/page-1", "_blank");
          }}
        >
          <div className="tooltip">
            <FcAdvance />
            {isCollapse && <span className="tooltiptext">Page 1</span>}
          </div>
          {!isCollapse && <span style={{ fontSize: "24px" }}>Page 1</span>}
        </div>
        <div
          style={Button2}
          onClick={() => {
            // navigate("/page-2");
            window.open("/page-2", "_blank");
          }}
        >
          <div className="tooltip">
            <FcAdvance />
            {isCollapse && <span className="tooltiptext">Page 2</span>}
          </div>
          {!isCollapse && <span style={{ fontSize: "24px" }}>Page 2</span>}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
