import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DetailFilling from "./pages/DetailFilling"
import Preview from "./pages/Preview"
import About from "./pages/About"
import "./App.css"
import MyResume from './pages/MyResume'

export default function App() {
  return (
    <div className=' bg-gray-200 min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<DetailFilling/>}/>
        <Route path='/preview' element={<Preview/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/myResume' element={<MyResume/>}/>
      </Routes>
    </div>
  )
}
