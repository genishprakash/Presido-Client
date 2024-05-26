import { useState } from 'react'

import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { useDispatch } from 'react-redux';
import { setBaseUrl } from './store/baseUrlSlice';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_REACT_APP_NODE_ENV === 'development'
      ? import.meta.env.VITE_REACT_APP_LOCAL_BASE_URL
      : import.meta.env.VITE_REACT_APP_SERVER_BASE_URL;
    
    dispatch(setBaseUrl(baseUrl));
  }, [dispatch]);
  
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    
    </>
  )
}

export default App
