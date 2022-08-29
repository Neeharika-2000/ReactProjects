import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
function App() {
  return (
   <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}/>
             <Route path="Login" element={<Login/>} />
             <Route path="Signup" element={<Signup/>} />
             <Route path="*" element="Page Not Found" />
         </Routes>
      </BrowserRouter>
  );
}

export default App;