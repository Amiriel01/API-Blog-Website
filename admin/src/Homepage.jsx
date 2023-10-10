import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import App from "./App";
import moment from "moment"

export default function Homepage({ articles, setArticles }) {
    // console.log({ articles })

    return (
        <>
            <div id="homepage-header-container">
                <h1 className="page-title">Admin Blog Page</h1>
                <Link id="create-article-button" className="link" to="/CreateArticle">
                    <button id="create-article-button">
                        Create New Article
                    </button>
                </Link>
            </div>
            <div className="article-container">
                {articles.map((article) => {

                    return <div className="article-card" key={article._id}>
                        <h2>{article.title}</h2>
                        <p>{article.timestamp}</p>
                        <p>{article.article_text}</p>
                        <p>{article.comments}</p>
                    </div>
                })}
            </div>
        </>
    )
}