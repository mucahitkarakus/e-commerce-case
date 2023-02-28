import React from 'react'
import { useNavigate } from 'react-router';





const Card = ({item}) => {
  
  const navigate = useNavigate();
  
  return (

    <div  className='bg-sky-100 rounded p-4 shadow-md hover:bg-sky-200 cursor-pointer'>
        <div onClick={() => navigate(`/post/${item.id}`, {state: item})}>
            <h2 className='font-bold mb-4'>{item.title}</h2>
            <p>{item?.body?.slice(0,100)}...</p>
        </div>

    </div>
  )
}

export default Card