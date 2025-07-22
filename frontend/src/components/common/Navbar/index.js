import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [auth, setAuth] = useState(localStorage.getItem('user'));
  const location = useLocation(); // listens to route changes

  useEffect(() => {
    // Every time the route changes, check auth status
    setAuth(localStorage.getItem('user'));
  }, [location]);

  return (
    <div className='p-5'>
      <ul className='flex gap-5 justify-end'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        { !auth ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/add-post">Add Post</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
