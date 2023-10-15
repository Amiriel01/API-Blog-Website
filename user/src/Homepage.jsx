import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'
import CreateSubscriber from "./CreateSubscriber";

export default function Homepage() {

    const [article, setArticle] = useState({});
    const { pathname } = useLocation();

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/652afa5821b153b3f4a772dc`).then((response) => {
            // console.log(response)
            setArticle(response.data);
        });
    }

    useEffect(() => {
        getArticle()
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div className="homepage-top-container">
                <h2 id="homepage-top-title">
                    Read My Introduction Article Here
                </h2>
                <div id="homepage-article-link-container">
                    <Link id="homepage-article-link" to="/HomepageArticle">
                        <div id="homepage-article">
                            <p>{article.title}</p>
                        </div>
                    </Link>
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
                <Link className="link" to="/AllArticles">
                    <div id="articles-image-container">
                        <div id="homepage-bot-title">
                            <h3>All Articles</h3>
                        </div>
                    </div>
                </Link>
                <Link className="link" to="/Resources">
                    <div id="resource-image-container">
                        <div id="homepage-bot-title">
                            <h3>Resources</h3>
                        </div>
                    </div>
                </Link>
                <a className="link" href="https://amiriel01.github.io/Portfolio-Template/" target="_blank">
                    <div id="portfolio-image-container">
                        <div id="homepage-bot-title">
                            <h3>Portfolio</h3>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}