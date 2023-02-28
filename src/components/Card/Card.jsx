import React from 'react'
import { useNavigate } from 'react-router';





const Card = ({item}) => {
  
  const navigate = useNavigate();
  
  return (

    <div className='w-[75%]  m-5 p-5 flex mx-auto cursor-pointer'>
        <div onClick={() => navigate(`/post/${item.id}`, {state: item})}>
            <h2 className='font-bold mb-4'>{item.title}</h2>
            <p>{item.body}</p>
        </div>

    </div>
  )
}

export default Card