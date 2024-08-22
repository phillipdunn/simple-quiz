import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/results' element={<Results />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
