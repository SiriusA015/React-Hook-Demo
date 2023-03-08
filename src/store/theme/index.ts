import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface ThemeState {
  isDark?: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.isDark;
export default themeSlice.reducer;
