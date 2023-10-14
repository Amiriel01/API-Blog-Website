import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/${id}`).then((response) => {
            console.log(response)
            setArticle(response.data);
        });
    }

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

    const commentComponent = article.comments?.map((comment) => {
        return <div key={comment._id}>
            <div id="comment-card">
                <div id="comment-text">
                    <p>{moment(comment.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                    <p id="comment_text">{comment.comment_text}</p>
                </div>
            </div>
        </div>
    })

    return (
        <>
            {/* <h1 className="page-title">Welcome to my blog!</h1> */}
            <div className="article-container">
                {/* <h2 id="article-title"> Title: </h2> */}
                <p className="article-info">{article.title}</p>
                {/* <h2 id="article-title"> Timestamp: </h2> */}
                <p className="article-info">{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                {/* <h2 id="article-title"> Article Text: </h2> */}
                <p className="article-info">{article.article_text}</p>
                <div className="article-buttons">
                    <div id="comment-button">
                        <button type="submit" id="homepage-button comment-button">
                            Comment
                        </button>
                    </div>
                    <Link to="/Homepage">
                        <button id="homepage-button">
                            Return Home
                        </button>
                    </Link>
                    {/* <h2 id="article-title"> Article Comments: </h2> */}
                    <ul>{commentComponent}</ul>
                </div>

                {/* <Link
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
                </Link> */}
            </div>
        </>
    )
}