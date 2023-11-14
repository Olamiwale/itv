import React from 'react'
import Profile from './component/Profile'
import Gallery from './component/Gallery'
import Navbar from './component/Navbar'
import Form from './component/Footer'
import HomePage from './component/HomePage'

export default function App() {
  return (
    <div className= 'm-auto bg-gray-600 text-white '>

      <div className='p-8'>
        <Navbar />
      <HomePage />
      
      <Profile />
      <Gallery />
      
      </div>
<Form />
      
      
      </div>
  )
}
