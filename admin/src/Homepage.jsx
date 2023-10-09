import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import App from "./App";


export default function Homepage({ articles, setArticles }) {
    console.log({ articles })

    return (
        <>
            <h1 className="homepage-title">Welcome to my blog page!</h1>
            <div>
                {articles.map((article) => (
                    <p>
                        {article.title} 
                    </p>
                ))}
            </div>
        </>
    )
}