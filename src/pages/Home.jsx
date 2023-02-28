import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postSlice';
import Card from '../components/Card/Card'
import Spinner from "../assets/spinner.gif"


const Home = () => {
  const { posts, loading } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      {
        loading
          ?
          <main className="container bg-white mt-4 mx-auto p-5 shadow-md ">
            <img className="block m-auto" src={Spinner} alt="loading-spinner" />
          </main>
          :
          <main className='container bg-white mt-4 mx-auto p-5 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5' >
            {
              posts.map((post,index)=><Card key={index} {...post}/>)
            }
           
          </main>
      }
    </>
  )
}

export default Home