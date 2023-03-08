import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import moment from "moment-timezone";

export interface MessageState {
  message: string[];
}

const initialState: MessageState = {
  message: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    initMessage: (state) => {
      state.message = [];
    },
    addMessage: (state, action: PayloadAction<string>) => {
      let currrent: any = moment().format("MM/DD/YYYY HH:mm:ss").toString();
      let newMessage: string = currrent + "  " + action.payload;
      let newList: any = [newMessage].concat(state.message);
      state.message = newList;
    },
  },
});

export const { addMessage } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message;
export default messageSlice.reducer;
