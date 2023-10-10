import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import axios from "axios";
import React from 'react';
import Homepage from './Homepage';
import Article from './Article';
import CreateArticle from './CreateArticle';

export default function App() {
  //use states for methods (http verbs)
  //get all articles and details
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await axios.get("http://localhost:3000/routers/articles").then((response) => {
      setArticles(response.data);
    });
  }

  useEffect(() => {
    const articles = getArticles()
  }, []);

  //get an article by id and its details
  const [article, setArticle] = useState([]);

  async function getArticle() {
    const response = await axios.get("http://localhost:3000/routers/article/:id").then((response) => {
      setArticle(response.data);
    });
  }

  useEffect(() => {
    const article = getArticle()
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Homepage
            articles={articles}
            setArticles={setArticles}
          />} />
          <Route path="/article/:id" element={<Article
            article={article}
            setArticle={setArticle}
          />} />
          <Route path="/CreateArticle" element={<CreateArticle
          />} />
        </Routes>
      </div>

    </>
  )
}


