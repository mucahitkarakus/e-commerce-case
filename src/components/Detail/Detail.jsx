import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router';


import {AiFillDelete} from "react-icons/ai"
import {GoPencil} from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux';

const Detail = ({item}) => {
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    
    const {state} = useLocation();
    
    const { post, deletePost, loading, isEdit, updatePost, showUpdated } = useSelector(state => state.posts);

    const [comments,setComments] = useState([]);

    const getComments = async () => {
        const url = `${process.env.REACT_APP_LINK}/posts/${item.id}/comments`
        const response = await fetch(url)
        const data = await response.json()
        setComments(data)
    }

    const [updateText, setUpdateText] = useState({
    title: item?.title,
    body: item?.body
    })

    const handleDelete = () => {
    dispatch(deletePost({ id: item?.id }))
    }

    const handleUpdate = () => {
    dispatch(updatePost({
      id: item?.id,
      title: updateText.title,
      body: updateText.body
    }))}

    const handleChange = (e) => {
    setUpdateText({
      ...updateText,
      [e.target.name]: e.target.value
    })
    }



  return (
      <div className=''>
        <div className='flex justify-between ml-16' >
            <h2 className='font-bold'>Posts</h2>
            <button className='bg-blue-500 w-24 h-8 rounded-lg text-white '><span>+</span> New Post</button>
        </div>
        <div className='ml-16  mt-8 font-bold'>
            <h2>Title</h2>
            <p className='mt-4'>{state.title} </p>
        </div>
        <div className='ml-16  mt-8'>
            <h2 className='font-bold'>Detail</h2>
            <p className='mt-8 border border-slate-200 bg-slate-200 rounded-lg '>{state.body}</p>
        </div>
        <div className='flex mt-16 justify-end '> 
            <button className='flex items-center justify-center bg-red-600 w-24 h-8 rounded-lg text-white ' 
            
            >
                <AiFillDelete/> <span className='ml-2'>Delete</span> 
            </button>
            <button className='flex items-center justify-center bg-blue-500 w-24 h-8 rounded-lg ml-8 text-white'> <GoPencil/> <span className='ml-2'>Update</span>  </button>
        </div>
      </div>

  )
}

export default Detail