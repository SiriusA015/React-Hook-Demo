import { useState } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { addMessage } from "store/message";
import { changeTheme } from "store/theme";
import { selectTheme } from "store/theme";

const LeftPart = () => {
  const [textDetail, setTextDetail] = useState("");
  const [isDark, setDark] = useState(false);
  const [buttonCount, setButtonCount] = useState(1);
  const dispatch = useAppDispatch();
  const isDarkTheme: any = useAppSelector(selectTheme);

  const onChangeTheme = () => {
    dispatch(changeTheme({ isDark: !isDark }));
    let message: string = !isDark
      ? `Theme was set to Dark`
      : `Theme was set to Light`;
    dispatch(addMessage(message));
    setDark(!isDark);
  };

  const onChangeTextDetail = (e: any) => {
    setTextDetail(e.target.value);
  };
  const onClickTextButton = () => {
    dispatch(addMessage(textDetail));
    setTextDetail("");
  };

  let elements = [];
  for (let i = 1; i <= buttonCount + 1; i++) {
    elements.push(
      <div
        key={i}
        style={{
          padding: "10px",
          border: "1px solid #111111",
          borderRadius: "20px",
          cursor: "pointer",
          marginBottom: "10px",
          backgroundColor: isDarkTheme ? "#f0f8ff" : "#cc0000",
          color: isDarkTheme ? "#800080" : "white",
        }}
        onClick={() => {
          clickAddButton(i);
        }}
      >
        {i === buttonCount + 1 ? `Add Button ${i}` : `Button ${i}`}
      </div>
    );
  }

  const clickAddButton = (index: number) => {
    if (index === buttonCount + 1) {
      setButtonCount(buttonCount + 1);
      dispatch(addMessage(`Button ${index} was added`));
    } else {
      dispatch(addMessage(`Button ${index} was clicked`));
    }
  };

  return (
    <div
      style={{
        overflow: "auto",
        height: "86vh",
        borderRight: "1px solid #808080",
        background: isDarkTheme ? "white" : "#cecece",
      }}
    >
      <div
        style={{
          width: "46%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          border: "1px solid #111111",
          borderRadius: "20px",
          cursor: "pointer",
          margin: "100px auto auto auto",
          backgroundColor: isDarkTheme ? "#f0f8ff" : "#cc0000",
          color: isDarkTheme ? "#800080" : "white",
        }}
        onClick={onChangeTheme}
      >
        {isDark ? `Set Light Theme` : "Set Dark Theme"}
      </div>
      <div
        style={{
          width: "50%",
          marginTop: "50px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "10px",
        }}
      >
        <input
          style={{ width: "60%" }}
          value={textDetail}
          onChange={onChangeTextDetail}
        />
        <div
          style={{
            pointerEvents: textDetail !== "" ? "visible" : "none",
            opacity: textDetail !== "" ? "1" : "0.4",
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
            border: "1px solid #111111",
            borderRadius: "10px",
            cursor: "pointer",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: isDarkTheme ? "#f0f8ff" : "#cc0000",
            color: isDarkTheme ? "#800080" : "white",
          }}
          onClick={onClickTextButton}
        >
          Button
        </div>
      </div>
      <div
        style={{
          width: "50%",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {elements}
      </div>
    </div>
  );
};
export default LeftPart;
