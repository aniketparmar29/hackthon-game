import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom';
import Game from '../aniket/Game';
import Register from './Register';
import Snake from '../snakegame/Snake';
import Home from './Home';
import PageNotFound from './PageNotFOund';
import WordGuess from './WordGuess';
import Login from './Login';
function Mainroutes() {
  const [userId, setUserId] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wordguess' element={<WordGuess userId={userId} />}></Route>      
        <Route path='/shoot' element={<Game userId={userId} />}></Route> 
        <Route path='/snake' element={<Snake userId={userId} />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login setUserId={ setUserId} />}></Route>     
        <Route path='*' element={<PageNotFound/>}></Route>     
    </Routes>
    </>
  )
}

export default Mainroutes