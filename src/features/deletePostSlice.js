import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: ""
}

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async () => {
        return fetch(
            `${process.env.REACT_APP_LINK}/posts/1`,
            {
                method: "DELETE"
            },
        )
    }
)

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deletePost.pending, (state) => {
            state.loading = true
        });
        builder.addCase(deletePost.fulfilled, (state) => {
            state.loading = false,
            state.error = ""
        });
        builder.addCase(deletePost.rejected, (state) => {
            state.loading = false,
            state.error = "Yüklenemedi."
        });

    }
})

export default postSlice.reducer;