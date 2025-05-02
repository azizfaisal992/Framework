import React from 'react'
import { Clock, Facebook, Instagram,Plus, Menu, Search,ShoppingCart, Twitter, Youtube } from 'lucide-react';
import {  NavLink } from 'react-router-dom';
import Button from '../shared/Button';

function Navbar() {
  return (
    <div className='w-full  '>
      <div className='container mx-auto flex'>
      {/*left side navbar*/ }
      <div className='bg-white flex items-center px-6 py-4'>
        <span className='block w-2 h-2 bg-orange-500 rounded-full mr-4'></span>
        <img src="logo.svg" alt="" />
      </div>
      


      {/*Right Navbar*/ }
      
      <div className='w-[1500px]'>
      <div className='bg-red-600 w-full text-white text-sm flex justify-between items-center px-6 py-2'>
        <div className='flex items-center space-x-2'>
          <Clock className='w-4 h-4'/>
          <span>09:00 am – 06:00 pm</span>
        </div>
        <div className='flex items-center space-x-3'>
          <span>Follow US: </span>
          <Facebook/>
          <Instagram/>
          <Twitter/>
          <Youtube/>
        </div>
      </div>

      <div className='bg-black flex justify-between  items-center px-6 py-6'>
        
        <ul className="hidden sm:flex gap-10 font-medium justify-between text-md text-white">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p className='flex gap-3'>HOME <Plus /></p>
            </NavLink>
            <NavLink to="/blog" className="flex flex-col items-center gap-1">
              <p className='flex gap-3'> BLOG <Plus /></p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p className='flex gap-3'>ABOUT <Plus /></p>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p className='flex gap-3'>CONTACT <Plus /> </p>
            </NavLink>
          </ul>
          <div className='flex text-white items-center justify-between gap-10'>
          <Search />
          <ShoppingCart />
          <Button text="order now"/>
          <Menu />
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
