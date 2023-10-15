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
    const [article, setArticle] = useState({});
    const [commentRerender, setCommentRerender] = useState(0)

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/${id}`).then((response) => {
            console.log(response)
            setArticle(response.data);
        });
    }
    //look for react router to route to homepage here in the .then(response)
    // async function handleDelete() {
    //     return axios.delete(`http://localhost:3100/routers/article/${id}`).catch((reason) => {
    //         alert("It's Broken!")
    //     })
    // .finally(()=> {
    //     put homepage route here
    // })
    //omit if not used

    //use this for non-async
    async function handleDelete() {
        try {
            const response = await axios.delete(`http://localhost:3100/routers/article/${id}`)
            //put routing to homepage here
        } catch { }
    }

    async function handleDeleteButton(comment) {
        try {
            await axios.delete(`http://localhost:3100/routers/article/${id}/comment/${comment._id}`)
        } catch { }
        setCommentRerender(commentRerender + 1)
        // article.comments.splice(article.comments.indexOf(), 1)
    }

    useEffect(() => {
        getArticle()
    }, []);

    const commentComponent = article.comments?.map((comment) => {
        return <div key={comment._id}>
            <div id="comment-card">
                <div id="comment-text">
                    <p>{moment(comment.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                    <p id="comment_text">{comment.comment_text}</p>
                </div>
                <div id="comment-button">
                    <button onClick={() => handleDeleteButton(comment)}
                    
                    type="submit" id="homepage-button delete-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    })

    return (
        <>
            <h1 className="page-title">Article Review</h1>
            <div className="article-container">
                <h2 id="article-title"> Title: </h2>
                <p className="article-info">{article.title}</p>
                <h2 id="article-title"> Timestamp: </h2>
                <p className="article-info">{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                <h2 id="article-title"> Article Text: </h2>
                <p className="article-info">{article.article_text}</p>
                <h2 id="article-title"> Article Comments: </h2>
                <div className="comment-container" key={commentRerender}>
                    {commentComponent}
                </div>
            </div>
            <div className="article-buttons">
                <Link to="/Homepage">
                    <button id="homepage-button">
                        Return Home
                    </button>
                </Link>
                <Link
                    to={`/ArticleUpdate/${id}`}
                    article={article}
                >
                    <button >
                        Update Article
                    </button>
                </Link>
                <Link to="/Homepage">
                    <button onClick={handleDelete}>
                        Delete Article
                    </button>
                </Link>
            </div>
        </>
    )
}