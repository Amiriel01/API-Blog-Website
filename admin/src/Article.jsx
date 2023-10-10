import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import App from "./App";
import moment from "moment"

export default function Article({ article, setArticle }) {
    
    console.log({ article })

    return (
        <>
            <h1 className="page-title">Article Review Page</h1>
            <div className="article-container">
                {/* {article.map((article) => {

                    return <div key={article._id}> */}
                <p>{article.title}</p>
                <p>{article.timestamp}</p>
                <p>{article.article_text}</p>
                <p>{article.comments}</p>
            </div>
            {/* //     })}
            // </div> */}
        </>
    )
}