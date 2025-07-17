import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import Posts from './Posts/index';
import Navbar from '../common/Navbar/index';
import Single from './Single';
import Login from './Login';

const Pages = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/posts' element={ <Posts />}/>
            <Route path='/posts/:id' element={ <Single />}/>
            <Route path='/login' element={ <Login /> } />
        </Routes>
    </div>
  )
}

export default Pages