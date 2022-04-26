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
    removeLink: (state, { payload }) => {
      const id = payload;
      state.value.linkList = state.value.linkList.filter(
        (item) => item.id !== id
      );
    },
    upvoteLink: (state, { payload }) => {
      const item = state.value.linkList.find((item) => item.id === payload);
      if (item) {
        item.votes += 1;
      }
    },
    downvoteLink: (state, { payload }) => {
      const item = state.value.linkList.find((item) => item.id === payload);
      if (item) {
        item.votes -= 1;
      }
    },
  },
});

export const { updateState, removeLink, upvoteLink, downvoteLink } =
  linkSlice.actions;

export default linkSlice.reducer;
