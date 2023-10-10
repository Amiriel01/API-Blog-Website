import React from "react";
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import App from "./App";
import axios from "axios";


export default function CreateArticle() {

    // const [article, setArticle] = useState({
    //     title: "",
    //     article_text: ""
    // });

    // const titleUpdate = (event) => { setTitle(event.target.value) }
    // const articleTextUpdate = (event) => { setArticleText(event.target.value) }

    //kind of works
    // const handleChange = (event) => {
    //     let value = event.target.value;
    //     setArticle({
    //         title: value,
    //         article_text: value
    //     })
    // }

    const initialValues = {
        title: "",
        article_text: "",
    };

    const [article, setArticle] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setArticle({
            ...article,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const articleData = {
            title: article.title,
            article_text: article.article_text
        }
        setArticle(initialValues)
        
        axios.post("http://localhost:3000/routers/article", articleData).then((response) => {
            console.log(response.status, response.data)
        })
    }

    return (
        <>
            <div>
                <h1 className="page-title">Create New Article</h1>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={article.title}
                        onChange={handleChange}
                    />

                    <label>Article Text:</label>
                    <input
                        type="text"
                        name="article_text"
                        value={article.article_text}
                        onChange={handleChange}
                    />

                    <button type="submit">Create Article</button>
                </form>
            </div>
        </>
    )
}