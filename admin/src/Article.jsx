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
    const comments = [];

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

    useEffect(() => {
        getArticle()
    }, []);

    const comment = article.comments?.map((comment) => {
        console.log(article.comments)
        console.log({comment})
        console.log(comment.comment_text)
        return comment
    })
    
    // console.log(comment.comment_text)

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
                {/* <p className="article-info">{comment.comment_text}</p> */}
                {/* {article.comments.map((comment) => {
                    key={comment._id}
                    <p {comment.comment_text} </p>
                })} */}
                {/* {article.map((comments) {
                    return (key={comments}
                    {comments.map((comment) => {
                            <p>key={comment.id}</p>
                            return (
                                <p>{comment}</p>
                            )
                        })
                    }
                }))} */}

                {/* map over article.comment array
                <p className="article-info">{article.comments}</p> */}
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