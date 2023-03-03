import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Aniket from '../aniket/Aniket';
import WordGuess from './WordGuess';
function Mainroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cricket' element={<Aniket/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wordguess' element={<WordGuess />}></Route>      
    </Routes>
    </>
  )
}

export default Mainroutes