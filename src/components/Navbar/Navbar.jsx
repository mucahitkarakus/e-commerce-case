import React from 'react'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const Navbar = () => {

 const {posts} = useSelector(state => state.posts)
  const myPosts = posts.filter((post)=> post.userId === 1).length
  const navigate = useNavigate()
  return (
    <header className='bg-white container shadow-md m-auto mt-8 p-5 flex justify-between items-center'>
      <h1 
      className='text-3xl font-bold cursor-pointer' 
      onClick={()=> navigate('/')}
      >
        Arbit Blog
        </h1>
      <nav className='flex gap-4 items-center'>
        <h3 
        className='text-2xl font-semibold relative cursor-pointer'
        onClick={()=> navigate('/')}
        >
          Posts
          <span className='absolute rounded-full bg-red-200 text-base left-11 bottom-6 w-5 h-5 flex justify-center items-center'>{myPosts}</span>
          </h3>
        <IoMdNotifications size={25} className='cursor-pointer'/>
        <AiTwotoneAppstore size={25} className='cursor-pointer'/>
        <img className='rounded-full  cursor-pointer w-10 h-10' src="https://imgs.search.brave.com/_BK9g-Eag6_Jib_7hjsEj1ZBuPw22RFZ9nYs_zmd2YE/rs:fit:337:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/VHpDN1VkZWtnM3NR/Z3lrdWZJdjRRQUFB/QSZwaWQ9QXBp" alt="profile" />
      </nav>
    </header>
  )
}

export default Navbar