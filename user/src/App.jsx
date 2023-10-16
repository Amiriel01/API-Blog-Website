import './App.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Article from './Article';
import Header from './Header';
import AllArticles from './AllArticles';
import Resources from './Resources';
import Footer from './Footer';
import HomepageArticle from './HomepageArticle';

function App() {
  return (
    <>
    <Header />
      <div>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/HomepageArticle" element={<HomepageArticle />} />
          <Route path="/AllArticles" element={<AllArticles />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
