import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
  
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token='))
            ?.split('=')[1];

        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        } else {
            console.error("Google authentication failed.");
            navigate('/login');
        }
    }, [navigate]);

    return <h2>Logging in...</h2>;
};

export default GoogleAuthHandler;
