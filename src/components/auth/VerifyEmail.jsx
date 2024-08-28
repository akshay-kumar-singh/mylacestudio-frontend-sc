import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../api';

function VerifyEmail() {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const response = await verifyEmail(token);
        setMessage(response.msg);
        if (response.msg.includes('already verified')) {
          setRedirecting(true);
        } else {
          setRedirecting(true);
        }
        setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
      } catch (error) {
        setMessage(error.msg || 'Email verification failed.');
      }
    };

    verifyUserEmail();
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className={`text-2xl font-bold mb-4 ${message.includes('already verified') ? 'text-green-500' : 'text-red-500'}`}>{message}</h2>
        {!redirecting && <p className="text-gray-600">Please wait while we redirect you to the login page.</p>}
      </div>
    </div>
  );
}

export default VerifyEmail;
