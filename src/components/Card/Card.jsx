import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'

import {getPost} from "../../features/postSlice"


const Card = () => {

    const {state} = useLocation();

    const dispatch = useDispatch();

    const post = useSelector((state) => state?.posts?.item)
    console.log(post);

    useEffect(() => {
    dispatch(getPost(state?.name))
    }, [dispatch, state?.name])

  const navigate = useNavigate();
  
  return (

    <div className='w-[75%] m-5 p-5 flex mx-auto cursor-pointer'>
        <div onClick={() => navigate("/post")}>
            <h2 className='font-bold mb-4'>{post.title}</h2>
            <p>{post.body}</p>
        </div>

    </div>
  )
}

export default Card