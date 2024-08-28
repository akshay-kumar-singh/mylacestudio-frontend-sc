import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth/';

const API_URL = ' https://mylace-backend-sc.onrender.com/api/auth/';

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);
    throw error;
  }
};

export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(`${API_URL}verify-email/${token}`);
    return response.data;
  } catch (error) {
    console.error('Email Verification Error:', error);
    throw error.response ? error.response.data : error.message;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error('Forgot Password Error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_URL}reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    console.error('Reset Password Error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};


