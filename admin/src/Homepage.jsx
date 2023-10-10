import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import App from "./App";
import moment from "moment"
import axios from 'axios'

export default function Homepage() {
    // console.log({ articles })

    //use states for methods (http verbs)
    //get all articles and details
    const [articles, setArticles] = useState([]);

    async function getArticles() {
        await axios.get("http://localhost:3000/routers/articles").then((response) => {
            setArticles(response.data);
        });
    }

    useEffect(() => {
        getArticles()
    }, []);

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
            <div className="all-articles-container">        
                    {articles.map((article) => {
                        return <Link to={"/Article/" + article._id}
                            key={article._id}>
                            <div className="article-card" >
                                <h2>{article.title}</h2>
                                <p>{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                                <p>{article.article_text}</p>
                                <p>{article.comments}</p>
                            </div>
                        </Link>
                })}
            </div>
        </>
    )
}