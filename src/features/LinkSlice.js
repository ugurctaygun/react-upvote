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
      state.value.linkList = state.value.linkList.filter(
        (item) => item.id !== payload
      );
      state.value.linkList = [item, ...state.value.linkList];
    },
    downvoteLink: (state, { payload }) => {
      const item = state.value.linkList.find((item) => item.id === payload);
      if (item) {
        item.votes -= 1;
      }
      state.value.linkList = state.value.linkList.filter(
        (item) => item.id !== payload
      );
      state.value.linkList = [item, ...state.value.linkList];
    },
    sortDescending: (state) => {
      state.value.linkList.sort(
        (a, b) => parseFloat(b.votes) - parseFloat(a.votes)
      );
    },
    sortAscending: (state) => {
      state.value.linkList.sort(
        (a, b) => parseFloat(a.votes) - parseFloat(b.votes)
      );
    },
  },
});

export const {
  updateState,
  removeLink,
  upvoteLink,
  downvoteLink,
  sortDescending,
  sortAscending,
} = linkSlice.actions;

export default linkSlice.reducer;
