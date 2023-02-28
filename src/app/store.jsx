import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice"
import addPostReducer from "../features/addPostSlice"


const store = configureStore({
    reducer:{
        posts: postReducer,
        addPost: addPostReducer,
    }
})


export default store;
