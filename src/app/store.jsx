import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice"
import addPostReducer from "../features/addPostSlice"
import deletePostReduecer from "../features/deletePostSlice"


const store = configureStore({
    reducer:{
        posts: postReducer,
        addPost: addPostReducer,
        deletePost : deletePostReduecer,
    }
})


export default store;
