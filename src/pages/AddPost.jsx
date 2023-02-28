import React from 'react'

const AddPost = () => {
  return (
    <div className= ' bg-slate-100 grid grid-cols-3 m-10' >
        <section className=' flex  items-center justify-center container bg-white mt-4 mx-auto p-5 shadow-md'>
            <form className='m-auto md:w-1/2'>
                <label htmlFor="title" className='font-bold text-lg'>Title</label>
                <input 
                type="text"
                  className='bg-sky-50 rounded p-4 shadow-md w-full'
                    name='title'
                    id='title'
                 />
                <label htmlFor='detail' className='font-bold text-lg'>Detail</label>
                <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    className='bg-sky-50 rounded p-4 shadow-md w-full'
                ></textarea>
                  <button
                    className='rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-700 m-auto block mt-3'
                >
                    + Add New Post
                </button>
            </form>
        </section>
    </div>
  )
}

export default AddPost