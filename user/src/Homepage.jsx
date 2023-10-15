import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'

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
            <div className="homepage-container">
                <div id="homepage-article-link-container">
                    <div id="homepage-article">
                        <p>{article.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}