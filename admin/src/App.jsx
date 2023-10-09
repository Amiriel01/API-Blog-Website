import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import axios from "axios";
import React from 'react';
import Homepage from './Homepage';

export default function App() {
    //use states for methods (http verbs)
    const [articles, setArticles] = useState([]);

    async function getArticles() {
      const response = await axios.get("http://localhost:3000/routers/articles").then((response) => {
        setArticles(response.data);
      });
      
    }

    useEffect( () => {
      const articles = getArticles()
    }, []);

    // async function postArticles() {
    //   const baseURL = "http://localhost:3000/routers/articles";
    //   const
    // }


    return (
      <>
        <div>
        <Routes>
        <Route path="*" element={<Homepage 
          articles={articles}
          setArticle={setArticles}
        />} />
        </Routes>
        </div>

      </>
    )
  }


