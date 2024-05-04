import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Todo",
    content: "The more I say slice, the more I want pizza",
  },
  {
    id: "",
    title: "Leearning redux toolkit",
    content: "I ve heard good thing",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
