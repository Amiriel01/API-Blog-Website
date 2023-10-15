import './App.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Article from './Article';
import Header from './Header';
import AllArticles from './AllArticles';
import SignUp from './SignUp';
import Resources from './Resources';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header />
      <div>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/AllArticles" element={<AllArticles />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
