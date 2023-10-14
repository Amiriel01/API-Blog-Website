import './App.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Article from './Article';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </>
  )
}

export default App
