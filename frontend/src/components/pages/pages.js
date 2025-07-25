import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import Posts from './Posts/index';
import Navbar from '../common/Navbar/index';
import Single from './Single';
import Login from './Login';
import AddPost from './AddPost';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const Pages = () => {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <div className='max-w-7xl m-auto'>
        <Navbar authUser={authUser}/>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/posts' element={ <Posts />}/>
            <Route path='/posts/:id' element={ <Single />}/>
            <Route path='/login' element={ <Login /> } />
            <Route path='/logout' element={ <Logout/> } />
            <Route element={<ProtectedRoute authorUser={authUser} /> }>
              <Route path='/add-post' element={<AddPost/>} />
              <Route path='/profile' element={ <div>Profile Page</div> }></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default Pages