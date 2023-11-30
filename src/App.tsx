import React from 'react';
import './App.css';
import Layout from './pages/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import LayoutVideo from './pages/LayoutVideo/LayoutVideo';
import { useGlobalContext } from './context';


function App() {

  const { theme } = useGlobalContext()
  return (
    <div className={`w-full  ${theme === 'dark' ? 'dark:bg-[#121211] dark:text-white' : 'bg-white text-black'} `}>
     <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/layout/:id" element={<LayoutVideo />} />
      </Routes> 
    </div>
  );
}

export default App;
