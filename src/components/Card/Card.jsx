import React from 'react'
import { useNavigate } from 'react-router'

const Card = () => {
    const navigate = useNavigate();
  return (

    <div className='w-[75%] m-5 p-5 flex mx-auto cursor-pointer'>
        <div onClick={() => navigate("/post")}>
            <h2 className='font-bold mb-4'>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, doloribus deleniti excepturi ut consectetur laboriosam odio perspiciatis molestiae error exercitationem.</p>
        </div>

    </div>
  )
}

export default Card