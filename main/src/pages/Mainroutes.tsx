import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Game from '../aniket/Game';
import Home from './Home';
import WordGuess from './WordGuess';
function Mainroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wordguess' element={<WordGuess />}></Route>      
        <Route path='/shoot' element={<Game />}></Route>      
    </Routes>
    </>
  )
}

export default Mainroutes