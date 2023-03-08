import sideBarReducer from "./sideBar";
import messageReducer from "./message";
import themeReducer from "./theme";

const rootReducers = {
  sideBar: sideBarReducer,
  message: messageReducer,
  theme: themeReducer,
};

export default rootReducers;
