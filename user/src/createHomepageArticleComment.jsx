import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function CreateHomepageArticleComment() {

    const initialValues = {
        name: "",
        email: "",
        comment_text: "",
    };

    const [comment, setComment] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setComment({
            ...comment,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const commentData = {
            name: comment.name,
            email: comment.email,
            comment_text: comment.comment_text,
        }
        setComment(initialValues)

        axios.post(`http://localhost:3100/routers/article/652afa5821b153b3f4a772dc/comment`, commentData).then((response) => {
            console.log(response.status, response.data)
        })
    }

    return (
        <>
            <div id="flex-form-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div id="comment-input-container">
                        <input id="comment-input"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={comment.name}
                            onChange={handleChange}
                        />
                        <input id="comment-input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={comment.email}
                            onChange={handleChange}
                        />
                        <div id="comment-textarea-container">
                            <textarea id="comment-textarea"
                                type="text"
                                name="comment_text"
                                placeholder="Enter Comment Here"
                                value={comment.comment_text}
                                onChange={handleChange}
                            />
                        </div>
                        <button id="send-comment-button" type="submit">Send Comment</button>
                        <Link to="/Homepage">
                            <button id="return-home-button">
                                Return Home
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )

}