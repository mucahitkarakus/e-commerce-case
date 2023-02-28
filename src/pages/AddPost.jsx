import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddPost = () => {
     const [newPost, setNewPost] = useState({
        title: '',
        detail: ''
    })
    
    const { loading, addPost, showAddedPost} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
      setNewPost({
          ...newPost,
          [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addPost({ newPost }))
    }
    
    return (
    <section className='  bg-white mt-4 m-10 p-5 shadow-md'>
            <form onSubmit={handleSubmit} className='m-auto md:w-1/2'>
                <label htmlFor='title' className='font-bold text-lg'>Title</label>
                <input
                    type="text"
                    className='bg-sky-50 rounded p-4 shadow-md w-full'
                    name='title'
                    id='title'
                    value={newPost.title}
                    onChange={handleChange}
                />
                <label htmlFor='detail' className='font-bold text-lg'>Detail</label>
                <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    className='bg-sky-50 rounded p-4 shadow-md w-full'
                    value={newPost.detail}
                    onChange={handleChange}
                ></textarea>
                <button
                    className='rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-700 m-auto block mt-3'
                >
                    + Add New Post
                </button>

            </form>
            {
                showAddedPost &&
                <div className='m-auto mt-3 md:w-1/2'>
                        <div
                            className='bg-sky-100 rounded p-4 shadow-md'

                        >
                            <h3 className='font-bold pb-4'>{addPost?.title}</h3>
                            <p>{addPost?.body}</p>
                        </div>
            </div>
            }
        </section>
  )
}

export default AddPost