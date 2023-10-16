import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div id="footer-container">
                <div id="left-footer">
                    <p id="footer-title">
                        Thank you for visiting!
                    </p>
                    <p id="footer-info">
                        Don't forget to subscribe to updates before you leave!
                    </p>
                    <p id="footer-info">
                        If you've left a comment on one of my articles I will respond as soon as possible.
                    </p>
                    <p id="footer-bye">
                        Have a great day!
                    </p>
                </div>
                <div id="right-footer">
                    <Link className="footer-link" to="/Homepage">Home</Link>
                    <Link className="footer-link" to="/AllArticles">View All Articles</Link>
                    <Link className="footer-link" to="/Resources">View Resources</Link>
                    <a className="footer-link" href="https://amiriel01.github.io/Portfolio-Template/" target="_blank">View My Portfolio Site</a>
                </div>
            </div>
        </>
    )
}