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


  // //get an single article by id and its details
  

  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Homepage
          />} />
          <Route path="/article/:id" element={<Article
          />} />
          <Route path="/CreateArticle" element={<CreateArticle
          />} />
        </Routes>
      </div>

    </>
  )
}


