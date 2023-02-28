import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home'
import Post from '../pages/Post'


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/post/:id' element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter