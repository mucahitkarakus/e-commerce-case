import React from 'react'
import {MdKeyboardReturn} from "react-icons/md"
import {useNavigate} from "react-router"


const Post = () => {
    const navigate = useNavigate();

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
            <button className='bg-blue-500 w-24 h-8 rounded-lg '><span>+</span> New Post</button>
        </div>
        <div className='ml-16  mt-8 font-bold'>
            <h2>Title</h2>
            <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, perferendis maiores nemo sed deleniti corrupti harum aperiam voluptates error sint minus temporibus. </p>
        </div>
        <div className='ml-16  mt-8'>
            <h2 className='font-bold'>Detail</h2>
            <p className='mt-8 border border-slate-200 bg-slate-200 rounded-lg '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quas odit alias saepe cupiditate. Nihil delectus maxime consectetur praesentium neque rerum placeat dolore dolorum sequi! Error nisi natus voluptate modi est a, ipsam recusandae quia officiis alias qui inventore, reiciendis dolorum consequuntur nam maiores vel? Officia excepturi praesentium ut quod voluptates repellat ea, nulla laboriosam ex, fugit iste omnis totam eaque sint, delectus labore enim quo veniam corrupti dolore neque facilis? Impedit explicabo corporis tempora commodi error repellat necessitatibus incidunt ipsa vero, aspernatur fugit eum vitae minima tempore placeat possimus, illum fugiat eius, quos voluptate esse rerum! Tempore, nulla eum!</p>
        </div>
      </div>
    </div>
  )
}

export default Post