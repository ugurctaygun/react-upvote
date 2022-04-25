import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "links",
  initialState: {
    value: {
      linkList: [],
    },
  },
  reducers: {
    updateState: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { updateState } = linkSlice.actions;

export default linkSlice.reducer;
