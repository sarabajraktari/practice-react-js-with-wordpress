import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import Posts from './Posts/index';
import Navbar from '../common/Navbar/index';

const Pages = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/posts' element={ <Posts />}/>
        </Routes>
    </>
  )
}

export default Pages