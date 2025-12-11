import React from 'react';
import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Forms from './pages/Forms.jsx';
import Management from './pages/Management.jsx';
import Help from './pages/Help.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/management" element={<Management />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}
