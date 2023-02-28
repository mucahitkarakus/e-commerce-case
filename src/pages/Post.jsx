import React from 'react'
import {MdKeyboardReturn} from "react-icons/md"
import {useLocation, useNavigate} from "react-router"
import {AiFillDelete} from "react-icons/ai"
import {GoPencil} from "react-icons/go"
import Detail from '../components/Detail/Detail'

const Post = () => {
    const navigate = useNavigate();

    const {state} = useLocation();

  return (
    <div className='flex bg-slate-100 m-10 p-5 h-2/3 '>
      <div>
        <MdKeyboardReturn className='w-10 h-10 cursor-pointer'
        onClick={() => navigate("/")}
        />
      </div>
      <div className='w-[50%]'>
      <Detail />
      </div>
    </div>
  )
}

export default Post