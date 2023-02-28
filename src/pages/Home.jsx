import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Card from '../components/Card/Card'
import {getPost} from "../features/postSlice"






const Home = ({item}) => {

    const {state} = useLocation();

    const dispatch = useDispatch();

    const post = useSelector((state) => state?.posts?.item)

    console.log(post);

    useEffect(() => {
    dispatch(getPost(state?.name))
    }, [dispatch, state?.name])



  return (
    


    <div>
         <div className='bg-slate-100 grid grid-cols-3 m-10' >
           {post?.map((item, idx) => (
             <Card item={item} key={idx} /> 
           ))}
         </div>
    </div>
  )
}

export default Home