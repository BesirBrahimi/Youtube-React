import React from 'react';
import './App.css';
import Layout from './pages/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import LayoutVideo from './pages/LayoutVideo/LayoutVideo';


function App() {
  return (
    <div className='w-full'>
     <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/layout/:id" element={<LayoutVideo />} />
      </Routes> 
    </div>
  );
}

export default App;
