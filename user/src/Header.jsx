import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header">
                <div id="header-container">
                    <Link id="header-link" to="/Homepage">
                        <h1 className="page-title">A New Path</h1>
                    </Link>
                    <h2 className="page-second-title">Documenting my journey from educator to programmer, one step at a time.</h2>
                </div>
                <div className="header-links">
                    <Link id="header-link" to="/AllArticles">All Articles</Link>
                    <Link id="header-link" to="/Resources">Resources</Link>
                    <a id="header-link" href="https://amiriel01.github.io/Portfolio-Template/" target="_blank">Portfolio</a>
                </div>
            </div>
        </>
    )
}