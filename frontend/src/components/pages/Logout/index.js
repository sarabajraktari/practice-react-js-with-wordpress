import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('user');

        navigate('/login');
    },  [navigate])

    return null;
}

export default Logout;