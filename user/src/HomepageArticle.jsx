import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'
import { Link } from 'react-router-dom';
import CreateComment from "./CreateComment";

export default function Homepage() {

    const [article, setArticle] = useState({});

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/652afa5821b153b3f4a772dc`).then((response) => {
            // console.log(response)
            setArticle(response.data);
        });
    }

    useEffect(() => {
        getArticle()
    }, []);

    const commentComponent = article.comments?.map((comment) => {
        if (comment.published === true) {
            return <div id="ind-comment-card" key={comment._id}>
                <div id="comment-flex-container">
                    <p id="comment-name">{comment.name}</p>
                    <p id="comment-timestamp">{moment(comment.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                </div>
                <div id="comment-text-container">
                    <p id="comment_text">{comment.comment_text}</p>
                </div>
            </div>
        } else {
            return "";
        }
    })

    return (
        <>
            <div className="article-container">
                <p className="article-title">{article.title}</p>
                <p className="article-info">{article.article_text}</p>
                <div className="article-buttons">
                    <div id="comment-button">
                        <CreateComment />
                    </div>
                </div>
                <div id="comment-card">
                    <h4 id="reader-comments">Reader Comments</h4>
                    <ul>{commentComponent}</ul>
                </div>
            </div>
        </>
    )
}