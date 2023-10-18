import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import { useParams } from "react-router-dom";
import axios from 'axios'


export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [commentRerender, setCommentRerender] = useState(0)
    const [updateComment, setUpdateComment] = useState({});

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/${id}`).then((response) => {
            console.log(response)
            setArticle(response.data);
        });
    }
    //look for react router to route to homepage here in the .then(response)
    // async function handleDeleteArticle() {
    //     return axios.delete(`http://localhost:3100/routers/article/${id}`).catch((reason) => {
    //         alert("It's Broken!")
    //     })
    // .finally(()=> {
    //     put homepage route here
    // })
    //omit if not used

    async function handlePublishButton(comment) {
        await axios.put(`http://localhost:3100/routers/article/${id}/comment/${comment._id}`, comment).then((response) => {
            console.log(response)
            comment.published = !comment.published
            setUpdateComment(response.data)
        })
    }

    //use this for non-async
    async function handleDeleteArticle() {
        try {
            const response = await axios.delete(`http://localhost:3100/routers/article/${id}`)
            //put routing to homepage here
        } catch { }
    }

    async function handleDeleteCommentButton(comment) {
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
                    <p>{comment.name}</p>
                    <p>{moment(comment.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                    <p id="comment_text">{comment.comment_text}</p>
                </div>
                <div id="comment-buttons-container">
                    <div id="comment-button">
                        <div>
                            <button onClick={() => handlePublishButton(comment)}
                                type="submit" id="homepage-button" className="publish-button">
                                {comment.published ?"Publish" : "Unpublish"}
                            </button>
                        </div>
                    </div>
                    <div id="comment-button">
                        <button onClick={() => handleDeleteCommentButton(comment)}
                            type="submit" id="homepage-button" className="delete-button">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    })

    return (
        <>
            <h1 className="page-title">Article Review</h1>
            <div className="article-container">
                <h2 id="article-title"> Title: </h2>
                <p id="article-text">{article.title}</p>
                <h2 id="article-title"> Timestamp: </h2>
                <p id="article-text">{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p>
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
                    <button onClick={handleDeleteArticle}>
                        Delete Article
                    </button>
                </Link>
            </div>
        </>
    )
}