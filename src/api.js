import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);
    throw error;
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

