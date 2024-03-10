import React from 'react'
import { Link } from 'react-router-dom';
import About from './About';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col bg-slate-50'>
        <Navbar/>
        <Link to='/about'>sfreferf</Link>
        home page linvf
    </div>
  )
}

export default Home