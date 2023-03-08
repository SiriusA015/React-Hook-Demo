import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface SideBarState {
  isCollapsed?: boolean;
}

const initialState: SideBarState = {
  isCollapsed: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    changeCollapse: (state, action: PayloadAction<SideBarState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeCollapse } = sideBarSlice.actions;
export const selectSideBar = (state: RootState) => state.sideBar;
export default sideBarSlice.reducer;
