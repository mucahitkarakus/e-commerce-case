import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GetPost


export const getPost = createAsyncThunk(
    "post/getPost",
    async () => {
       const url = `${process.env.REACT_APP_LINK}/posts`
      const response = await fetch(url)
      const data = await response.json();
      return data
    }
);


//Post

export const addPost = createAsyncThunk(
  "post/addPost",
  async ({newPost}) => {
    const url = `${process.env.REACT_APP_LINK}/posts/`
    const response = await fetch(url, {
      method: "POST",
      header : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({
        title : newPost.title,
        body : newPost.detail,
        userId : 1
      })
    });
    const data = await response.json()
    return data;
   }
)



//Update

export const updatePost = createAsyncThunk  (
  "post/updatePost",
  async ({id, title, body}) => {
    const url = `${process.env.REACT_APP_LINK}/posts/${id}`
    const response = await fetch (url, {
      method: "PUT",
      headers : {
        "Content-type" : "aplication/json"
      },
      body:JSON.stringify({
        id : id,
        title: title,
        body : body ,
        userId : 1
      })
    });
    const data = await response.json()
    return data
  }
);

//Delete

export const deletePost = createAsyncThunk (
  "post/deletePost",
  async ({id}) => {
    const url = `${process.env.REACT_APP_LINK}/posts/${id}`
    const response = await fetch (url, {
      method: "DELETE"
    });
    const data = await response.json()
    return data
  }
);


const initialState = {
    post: [],
    addPost : {},
    updatePost : {},
    deletePost : "",
    loading: false,
    isEdit : false,
    showUpdated:false,
    showAddedPost:false
}


export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    removeDeleteText: (state) => { state.deleteText = '' },
    changeEdit: (state,action) => {state.isEdit = action.payload}
    },
   extraReducers:(builder) => {
    //GetPost
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
    //NewPost
    builder.addCase(addPost.pending, (state) => {
    state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.addPost = action.payload;
      state.loading = false;
      state.showAddedPost= true
    });
    builder.addCase(addPost.rejected, (state) => {
      state.loading = false;
   },
   //Update

   builder.addCase(updatePost.pending, (state) => {
    state.loading = true
   }),
   builder.addCase(updatePost.fulfilled, (state, action) => {
    state.loading = false;
    state.updatePost = action.payload
    state.showUpdated = true
   }),
    builder.addCase(updatePost.rejected, (state) => {
    state.loading = false
   }),
   
   //DELETE

   builder.addCase(deletePost.pending, (state) => {
    state.loading = true 
   }),

   builder.addCase(deletePost.fulfilled, (state) => {
    state.loading = false
    state.deletePost = "Post Silindi.."
   }),

   builder.addCase(deletePost.rejected, (state) => {
    state.loading = false
   })

)}})

export const { removeDeleteText,changeEdit } = postSlice.actions;

export default postSlice.reducer;