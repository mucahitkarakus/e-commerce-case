import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    loading: false,
    error: "",
}

export const getPost = createAsyncThunk(
    "post/getPost",
    async () => {
        return fetch(
            `${process.env.REACT_APP_LINK}/posts`
        ).then((res) => res.json())
    }
);


export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
   extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.item = action.payload;
    });
    builder.addCase(getPost.rejected, (state) => {
      state.loading = false;
      state.item = [];
      state.error = "Yüklenemedi";
    });
  },
})

export default postSlice.reducer;