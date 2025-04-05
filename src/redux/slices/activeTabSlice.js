// features/activeTab/activeTabSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "Overview", // default tab
};

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action) => {
      console.log("hiii");
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
