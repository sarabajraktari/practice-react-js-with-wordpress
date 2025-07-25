import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/slice/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className='p-5'>
      <ul className='flex gap-5 justify-end'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        { !authUser?.token ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            <li><button onClick={() => dispatch(logout())}>Logout</button></li>
            <li><Link to="/add-post">Add Post</Link></li>
            <li><Link to="/profile">Hi {authUser.user_display_name }</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
