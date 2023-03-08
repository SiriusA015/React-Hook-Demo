interface RemoveModalProps {
  setShowRemoveModal: (value: boolean) => void;
  removedCount: number;
  setRemovedCount: (value: number) => void;
}

const RemoveModal = (props: RemoveModalProps) => {
  const { setShowRemoveModal, removedCount, setRemovedCount } = props;

  return (
    <div
      style={{
        width: "550px",
        height: "400px",
        border: "1px solid #999999",
        boxShadow: "100px",
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
          Remove?
        </div>
        <div
          style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}
        >
          Are you sure you want to remove the Remove {removedCount} button?
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "130px",
            color: "black",
            padding: "7px 20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowRemoveModal(false);
          }}
        >
          Cancel
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "20px",
            backgroundColor: "#ffa500",
            color: "black",
            padding: "7px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setRemovedCount(removedCount + 1);
            setShowRemoveModal(false);
          }}
        >
          Remove
        </div>
      </div>
    </div>
  );
};
export default RemoveModal;
