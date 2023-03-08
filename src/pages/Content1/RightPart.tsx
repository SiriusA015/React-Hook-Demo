import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { selectMessage } from "store/message";
import { selectTheme } from "store/theme";

const RightPart = () => {
  const [allMessage, setAllMessage] = useState([]);
  const messageState: any = useAppSelector(selectMessage);
  const isDarkTheme: any = useAppSelector(selectTheme);

  useEffect(() => {
    setAllMessage(messageState.message);
  }, [messageState.message]);

  return (
    <div
      style={{
        width: "100%",
        height: "81.5vh",
        overflow: "auto",
        padding: "20px",
        background: isDarkTheme ? "#008080" : "white",
        color: isDarkTheme ? "white" : "#000000",
      }}
    >
      <div style={{ marginTop: "70px", paddingLeft: "100px" }}>
        {allMessage.map((message: any, index: any) => (
          <div style={{ marginBottom: "20px", textAlign: "left" }} key={index}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RightPart;
