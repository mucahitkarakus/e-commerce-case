import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
}

export const addPost = createAsyncThunk(
    "post/addPost",
        async () => {
            return fetch(
                `${process.env.REACT_APP_LINK}/posts`,
                {
                    method: "POST",
                }
            ).then((res) => res.json())
        }
)
 
export const  postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(addPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addPost.fulfilled, (state) => {
            state.loading = false;
            state.error = ""
        });
        builder.addCase(addPost.rejected, (state) => {
            state.loading = false;
            state.error = "Yüklenemedi."
        })
    }
})

export default postSlice.reducer;