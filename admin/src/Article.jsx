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
        await axios.get(`http://localhost:3000/routers/article/${ id }`).then((response) => {
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
            <div className="article-container">
                <p>{article.title}</p>
                <p>{moment(article.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>{article.article_text}</p>
                <p>{article.comments}</p>
            </div>
        </>
    )
}