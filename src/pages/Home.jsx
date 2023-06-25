import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import home from '../assets/home.jpg'
const Home = () => {
  
  return (
    <div>
    <div  className="h-screen bg-cover" style={{ 
      backgroundImage: `url(${home})`}}>
      <Navbar/>
      
      <div className="" >
        hi
      </div>
      
      
    </div>
    <Footer/>
    </div>
  )
}

export default Home
