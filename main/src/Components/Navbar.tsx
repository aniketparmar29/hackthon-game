import React from 'react'
import {Box,Grid,GridItem} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:flex xl:flex justify-evenly md:flex sm:flex-col flex-col bg-black'>
      <GridItem colSpan={1} h='40'
        color='tomato'
        alignItems={'center'} display='flex' justifyContent={'center'} >       <a href="https://www.highrevenuegate.com/zpmrbadia?key=9fdb71f9587bad2d92c5cdb022570db9" target="_blank" rel="noreferrer"><img src="https://png.pngtree.com/png-vector/20190417/ourmid/pngtree-esport-gaming-logo-with-red-dragon-and-shield-themes-and-defense-png-image_946287.jpg" alt="log" className='w-10' /></a></GridItem>
      <GridItem colSpan={1} h='40' color='tomato'
        alignItems={'center'}
        display='flex' justifyContent={'center'} >
       <a href="https://www.highrevenuegate.com/zpmrbadia?key=9fdb71f9587bad2d92c5cdb022570db9" target="_blank" rel="noreferrer">Games</a>
      </GridItem>
      <GridItem colSpan={1} h='40' color='tomato'
        alignItems={'center'}
        display='flex' justifyContent={'center'} >
       <a href="https://www.highrevenuegate.com/zpmrbadia?key=9fdb71f9587bad2d92c5cdb022570db9" target="_blank" rel="noreferrer"> Leaderboard</a>
      </GridItem>
      <GridItem
        colStart={4}
        colEnd={6} h='40' color='papayawhip' alignItems={'center'} display='flex'
        justifyContent={'center'}>
        <Link to="/register">Login/SignUp</Link> 
      </GridItem>
    </div>
  )
}





export default Navbar