import TestModal from "components/CTAModal";
import DeleteModal from "components/DeleteModal";
import RemoveModal from "components/RemoveModal";
import { useState } from "react";
import { useAppSelector } from "store/hooks";
import { selectTheme } from "store/theme";

const Content2 = () => {
  const [isShowCTA, setShowCTA] = useState(false);
  const [isShowRemoveModal, setShowRemoveModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);
  const [removedCount, setRemovedCount] = useState(1);
  const [deletedCount, setDeletedCount] = useState(1);
  const isDarkTheme: any = useAppSelector(selectTheme);

  const checkOtherModal = () => {
    if (isShowCTA || isShowRemoveModal || isShowDeleteModal) {
      return true;
    }
    return false;
  };
  return (
    <div
      style={{
        width: "100%",
        height: "86vh",
        background: "#cecece",
        border: "1px solid #808080",
        margin: "30px 0px 0px 30px",
      }}
    >
      <div
        style={{
          overflow: "auto",
          borderRight: "1px solid #808080",
        }}
      >
        <div
          style={{
            width: "12%",
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
          onClick={() => {
            if (!checkOtherModal()) {
              setShowCTA(true);
            }
          }}
        >
          Single CTA
        </div>
        <div
          style={{
            width: "12%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #111111",
            borderRadius: "20px",
            cursor: "pointer",
            margin: "50px auto auto auto",
            backgroundColor: isDarkTheme ? "#f0f8ff" : "#cc0000",
            color: isDarkTheme ? "#800080" : "white",
          }}
          onClick={() => {
            if (!checkOtherModal()) {
              setShowRemoveModal(true);
            }
          }}
        >
          Romove {removedCount}
        </div>
        <div
          style={{
            width: "12%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #111111",
            borderRadius: "20px",
            cursor: "pointer",
            margin: "50px auto auto auto",
            backgroundColor: isDarkTheme ? "#f0f8ff" : "#cc0000",
            color: isDarkTheme ? "#800080" : "white",
          }}
          onClick={() => {
            if (!checkOtherModal()) {
              setShowDeleteModal(true);
            }
          }}
        >
          Delete {deletedCount}
        </div>
        {isShowCTA && <TestModal setShowCTA={setShowCTA} />}
        {isShowRemoveModal && (
          <RemoveModal
            setShowRemoveModal={setShowRemoveModal}
            removedCount={removedCount}
            setRemovedCount={setRemovedCount}
          />
        )}
        {isShowDeleteModal && (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            deletedCount={deletedCount}
            setDeletedCount={setDeletedCount}
          />
        )}
      </div>
    </div>
  );
};
export default Content2;
