import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = ({onLogout}) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        onLogout();
        navigate('/'); 
        
    };

    return (
        <button
            onClick={handleLogout}
            className="block font-raleway items-center justify-center px-6 py-1 text-black font-semibold text-center border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
            Log Out
        </button>
    );
};

export default Logout;
