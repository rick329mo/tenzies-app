import { useState } from 'react'
import './App.css'
import './components/Header'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



function App() {
 return (
  <div 
    className='flex flex-col justify-between 
    bg-gray-200 text-center font-sans text-neutral-800 
    min-h-screen py-5 px-3'>

    <Header/>
    <Main/>
    <Footer/>
  </div>
 )
}

export default App
