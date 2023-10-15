import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'
import CreateSubscriber from "./CreateSubscriber";

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
            <div className="homepage-top-container">
                <h2 id="homepage-top-title">
                    Read My Introduction Blog Here
                </h2>
                <div id="homepage-article-link-container">
                    <div id="homepage-article">
                        <p>{article.title}</p>
                    </div>
                </div>
            </div>
            <div className="homepage-mid-container">
                <h3 id="homepage-mid-title">
                    Stay Updated
                </h3>
                <h4 id="homepage-mid-info">
                    Subscribe to recieve an email when new articles are posted.
                </h4>
                <div id="subscriber-form">
                    <CreateSubscriber />
                </div>
            </div>
            <div className="homepage-bot-container">
                
            </div>

        </>
    )
}