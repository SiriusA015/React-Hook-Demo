interface DeleteModalProps {
  setShowDeleteModal: (value: boolean) => void;
  deletedCount: number;
  setDeletedCount: (value: number) => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  const { setShowDeleteModal, deletedCount, setDeletedCount } = props;

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
          Delete?
        </div>
        <div
          style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}
        >
          Are you sure you want to delete the Delete {deletedCount} button?
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
            setShowDeleteModal(false);
          }}
        >
          Cancel
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "20px",
            backgroundColor: "#cc0000",
            color: "white",
            padding: "7px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setDeletedCount(deletedCount + 1);
            setShowDeleteModal(false);
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
