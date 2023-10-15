import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'
import { Link } from 'react-router-dom';

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

    return (
        <>
            <div className="article-container">
                <p className="article-title">{article.title}</p>
                <p className="article-info">{article.article_text}</p>
                <div className="article-buttons">
                    <div id="comment-button">
                        <button type="submit" id="homepage-button comment-button">
                            Send a Comment
                        </button>
                    </div>
                    <Link to="/Homepage">
                        <button id="homepage-button">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}