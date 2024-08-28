import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmailVerification() {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const baseURL = 'https://mylace-backend-sc.onrender.com';

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/auth/verify-email/${token}`);
        setMessage(response.data.msg);
        if (response.data.msg.includes('already verified')) {
          setRedirecting(true);
        } else {
          setRedirecting(true);
        }
        setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
      } catch (err) {
        setMessage(err.response?.data?.msg || 'Verification failed');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {message && <p className={`text-lg font-semibold mb-4 ${message.includes('verified') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        {!redirecting && <p className="text-gray-600">Please wait while we redirect you to the login page.</p>}
      </div>
    </div>
  );
}

export default EmailVerification;
