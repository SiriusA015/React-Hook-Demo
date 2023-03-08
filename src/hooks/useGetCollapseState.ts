import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { selectSideBar } from "store/sideBar";

const useGetCollapseState = () => {
  const [isCollapse, setCollapse] = useState(false);
  const sideBarState: any = useAppSelector(selectSideBar);

  useEffect(() => {
    setCollapse(sideBarState.isCollapsed);
  }, [sideBarState]);

  return { isCollapse };
};

export default useGetCollapseState;
