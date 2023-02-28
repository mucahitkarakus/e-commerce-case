import React from 'react'
import { AiTwotonePlayCircle, AiTwotoneAppstore } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const Navbar = () => {

  const navigate = useNavigate();

   const {posts} = useSelector(state => state.posts)


  return (
   <div className='bg-slate-100 h-12 m-10   '>
        <div className='flex items-center justify-between m-6 '>
            <div className='flex justify-start items-center mt-2'> 
            <AiTwotonePlayCircle className='w-8 h-8 mr-5' />
            <h2 className='cursor-pointer' onClick={() => navigate("/")}>Arbit Blog</h2>
            </div>
        <div className='flex justify-start items-center mt-2'> 
            <button onClick={() => navigate("/")} className='mr-5'>Posts</button>
            <IoMdNotifications  className='cursor-pointer mr-5' size={25} />
            <AiTwotoneAppstore className='cursor-pointer mr-5' size={25} />
            <img src="https://imgs.search.brave.com/lRriKfKIzH4MtRngWNqkXn2bfnax3VMC72vrtew3N2E/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/LUpwbnNzc0dieFZa/U01LUy0tZk5RSGFF/OCZwaWQ9QXBp" alt="img" className='w-8 h-8 rounded-full' />
        </div>
        </div>
    </div>
  )
}

export default Navbar