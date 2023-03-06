import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// GET
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const url = `${process.env.REACT_APP_LINK}/posts`
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }
);

// POST
export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ newPost }) => {
    const url = `${process.env.REACT_APP_LINK}/posts/`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.detail,
        userId: 1
      })
    });
    const data = await response.json()
    return data;
  }
);
//PUT
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, title, body }) => {
    const url = `${process.env.REACT_APP_LINK}/posts/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: 1
      })
    });
    const data = await response.json()
    console.log(data);
    return data;
  }
);

//DELETE
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async ({ id }) => {
    const url = `${process.env.REACT_APP_LINK}/posts/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    });
    const data = await response.json()
    return data;
  }
);

const initialState = {
  posts: [],
  addedPost: {},
  updatedPost: {},
  deleteText: '',
  loading: false,
  isEdit: false,
  showUpdated:false,
  showAddedPost:false
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removeDeleteText: (state) => { state.deleteText = '' },
    changeEdit: (state,action) => {state.isEdit = action.payload}
  },

  extraReducers: (builder) => {
    //GET POST
     builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
       state.item = [];
      state.error = "Yüklenemedi";
    });
    //NewPost
    builder.addCase(addPost.pending, (state) => {
    state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.addedPost = action.payload;
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
    state.updatedPost = action.payload
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
    state.deleteText = "Post Silindi.."
   }),

   builder.addCase(deletePost.rejected, (state) => {
    state.loading = false
   })
  },
});

export const { removeDeleteText,changeEdit } = postSlice.actions;

export default postSlice.reducer;
