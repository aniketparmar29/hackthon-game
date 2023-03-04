import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Game from '../aniket/Game';
import Snake from '../snakegame/Snake';
import Home from './Home';
import PageNotFound from './PageNotFOund';
import WordGuess from './WordGuess';
function Mainroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wordguess' element={<WordGuess />}></Route>      
        <Route path='/shoot' element={<Game />}></Route> 
        <Route path='/snake' element={<Snake/>}></Route>     
        <Route path='*' element={<PageNotFound/>}></Route>     
    </Routes>
    </>
  )
}

export default Mainroutes