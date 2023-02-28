import React from 'react'
import {MdKeyboardReturn} from "react-icons/md"
import {useLocation, useNavigate} from "react-router"
import {AiFillDelete} from "react-icons/ai"
import {GoPencil} from "react-icons/go"

const Post = () => {
    const navigate = useNavigate();

    const {state} = useLocation();

  return (
     <div className='bg-slate-100 m-10 p-5 '>
      <div>
        <MdKeyboardReturn className='w-10 h-10 cursor-pointer'
        onClick={() => navigate("/home")}
        />
      </div>
      <div className='w-[50%]'>
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
            <button className='flex items-center justify-center bg-red-600 w-24 h-8 rounded-lg text-white '>
                <AiFillDelete/> <span className='ml-2'>Delete</span> 
            </button>
            <button className='flex items-center justify-center bg-blue-500 w-24 h-8 rounded-lg ml-8 text-white'> <GoPencil/> <span className='ml-2'>Update</span>  </button>
        </div>
      </div>
    </div>
  )
}

export default Post