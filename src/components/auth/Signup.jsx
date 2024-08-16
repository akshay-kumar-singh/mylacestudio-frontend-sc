import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api';
import { useAuth } from '../../context/AuthContext';

function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, login: authLogin } = useAuth();
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      authLogin();
      setError(null);
      setMessage('Signup successful');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(null);
      setError(error.msg || 'Signup failed');
    }
  };

  return (
    <section className='flex justify-between items-center flex-col-reverse md:flex-row'>
      <div className='flex flex-col gap-4 my-10 mx-4 lg:mx-10 md:w-2/4 xl:w-[60%]'>
        <h1 className="self-center text-3xl md:text-4xl uppercase text-[#791204] font-roboto font-semibold whitespace-nowrap py-4">
          My Lace Studio
        </h1>
        <h2 className='font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest'>
          Create an Account
        </h2>
        <form onSubmit={onSubmit} className='flex flex-col gap-10 my-10 mx-4 lg:mx-10'>
          <div className='flex flex-col'>
            <label className='font-raleway font-semibold text-base md:text-lg'>
              Email/Phone No
            </label>
            <input
              className='font-raleway font-semibold text-base md:text-lg p-3 border-[#2B2A2A] border-4 rounded-md'
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder='samantha21xample@gmail.com'
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-raleway font-semibold text-base md:text-lg'>
              Password
            </label>
            <input
              className='w-full font-raleway font-semibold text-base md:text-lg p-3 border-[#2B2A2A] border-4 rounded-md'
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
            />
          </div>
          <span className='text-center gap-4 flex justify-center items-center'>
            <input type='checkbox' name='checkbox' />
            <button className='font-semibold text-base md:text-lg'>I agree to the terms of use and privacy policy.</button>
          </span>

          {error && <p className='text-red-500'>{error}</p>}
          {message && <p className='text-green-500'>{message}</p>}

          <button
            type='submit'
            className="inline-flex font-greatVibes items-center justify-center py-3 text-3xl md:text-4xl text-center text-black border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Sign up
          </button>

          <span className='font-semibold text-base md:text-lg text-center'>
            Already have an account? <Link to='/login' className='hover:underline'>Log In</Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Signup;

