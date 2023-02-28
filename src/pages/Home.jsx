import React, { useEffect } from 'react'
import Card from '../components/Card/Card'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { getPost } from '../features/postSlice'


const Home = () => {

  const {state} = useLocation();

  const dispatch = useDispatch();

  const post = useSelector((state) => state?.posts)
  console.log(post);

  useEffect(() => {
    dispatch(getPost(state?.name))
  }, [dispatch, state?.name])
  



  return (
    <div>
         <div className='bg-slate-100 w-full grid grid-cols-3 m-8   ' >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

         </div>
    </div>
  )
}

export default Home