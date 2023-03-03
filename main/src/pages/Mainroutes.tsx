import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Aniket from '../aniket/Aniket';
function Mainroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cricket' element={<Aniket/>}></Route>
    </Routes>
    </>
  )
}

export default Mainroutes