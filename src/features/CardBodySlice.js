import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    loading: false,
    error: "",
}

export const getPost = createAsyncThunk(
    "item/getPost", async () => {
        return fetch(
            `${process.env.REACT_APP_LINK}/posts`
        ).then((res) => res.json())
    }
);

export const postSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
   extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.album = action.payload;
    });
    builder.addCase(getPost.rejected, (state) => {
      state.loading = false;
      state.album = [];
      state.error = "Yüklenemedi";
    });
  },
})

export default CardBodySlice.reducer;