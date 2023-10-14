import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import moment from "moment"
import axios from 'axios'

export default function Header() {

    const [article, setArticle] = useState({});

    async function getArticle() {
        await axios.get(`http://localhost:3100/routers/article/${id}`).then((response) => {
            console.log(response)
            setArticle(response.data);
        });
    }
    return (
        <>
            <div className="header">
                <Link id="header-link" to="/Homepage">
                    <div id="header-container">
                        <h1 className="page-title">A New Path</h1>
                        <h2 className="page-second-title">Documenting my journey from educator to programmer, one step at a time.</h2>
                    </div>
                </Link>
                <div className="header-links">
                    <Link id="header-link" to="/AllArticles">All Articles</Link>
                    <Link id="header-link" to="/Resources">Resources</Link>
                    <Link id="header-link" to="/SignUp">Sign Up</Link>
                </div>
            </div>
        </>
    )
}