import React from "react";
import { BrowserRouter, Route, Link, NavLink, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import App from "./App";
import moment from "moment"
import { useParams } from "react-router-dom";
import axios from 'axios'
import ArticleUpdate from "./ArticleUpdate";

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState([]);

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/${id}`).then((response) => {
            setArticle(response.data);
        });
    }

    useEffect(() => {
        getArticle()
    }, []);

    return (
        <>
            <div className="article-review-update-container">
                <div id="side-container">
                    <h1 className="page-title">Article Review</h1>
                    <div className="article-container">
                        <div id="article-title-container">
                            <h2 id="article-title"> Title: </h2>
                            <h2 id="article-title">{article.title}</h2>
                        </div>
                        <p className="article-info">{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                        <h2 id="article-title"> Article Text: </h2>
                        <p className="article-info">{article.article_text}</p>
                        <p className="article-info">{article.comments}</p>
                    </div>
                    <div className="article-buttons">
                        <Link to="/Homepage">
                            <button id="homepage-button">
                                Return Home
                            </button>
                        </Link>
                    </div>
                </div>
                <div id="side-container">
                    <ArticleUpdate
                        article={article}
                        setArticle={setArticle}
                    />

                </div>
            </div >
        </>
    )
}