import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import App from "./App";
import moment from "moment"
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState([]);

    async function getArticle() {
        await axios.get(`http://localhost:3000/routers/article/${id}`).then((response) => {
            setArticle(response.data);
        });
    }

    useEffect(() => {
        getArticle()
    }, []);

    console.log({ article })

    return (
        <>
            <h1 className="page-title">Article Review Page</h1>
            <div className="article-buttons">
                <Link to="/Homepage">
                    <button id="homepage-button">
                        Return Home
                    </button>
                </Link>
                <Link to="/ArticleUpdate">
                    <button id="homepage-button">
                        Update Article
                    </button>
                </Link>
            </div>
            <div className="article-container">
                <div id="article-title-container">
                    <h2 id="article-title">Article Title: </h2>
                    
                    <h2>{article.title}</h2>
                </div>
                <p>{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                <p>{article.article_text}</p>
                <p>{article.comments}</p>
            </div>
        </>
    )
}