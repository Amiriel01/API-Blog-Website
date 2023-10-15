import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'

export default function AllArticles() {
    //use states for methods (http verbs)
    //get all articles and details
    const [articles, setArticles] = useState([]);
    const { pathname } = useLocation();

    async function getArticles() {
        await axios.get("http://localhost:3100/routers/articles").then((response) => {
            setArticles(response.data);
        });
    }

    useEffect(() => {
        getArticles()
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div className="all-articles-container">
                {articles.map((article) => {
                    return <NavLink to={"/Article/" + article._id} 
                        key={article._id}
                        className="link"
                        >
                        <div className="article-card" >
                            <h2 id="article-info">{article.title}</h2>
                            {/* <p id="article-info">{moment(article.timestamp).format('MMMM Do YYYY, h:mm a')}</p> */}
                            <p id="article-info">{article.article_text}</p>
                            {/* <p>{article.comments}</p> */}
                        </div>
                    </NavLink>
                })}
            </div>
        </>
    )
}