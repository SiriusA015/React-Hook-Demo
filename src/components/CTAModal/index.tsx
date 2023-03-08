interface TestModalProps {
  setShowCTA: (value: boolean) => void;
}

const TestModal = (props: TestModalProps) => {
  const { setShowCTA } = props;

  return (
    <div
      style={{
        width: "550px",
        height: "400px",
        border: "1px solid",
        borderRadius: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "200",
        backgroundColor: "white",
      }}
    >
      <div style={{ position: "relative", minHeight: "100%" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
            fontFamily: "bold",
          }}
        >
          Information
        </div>
        <div
          style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}
        >
          You have clicked the Single CTA button
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "20px",
            backgroundColor: "#03F",
            color: "white",
            padding: "7px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowCTA(false);
          }}
        >
          OK
        </div>
      </div>
    </div>
  );
};
export default TestModal;
