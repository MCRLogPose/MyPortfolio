// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;
