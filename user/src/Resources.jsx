import React from "react";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function Resources() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>
            <h1 id="resources-title">
                Helpful Resources
            </h1>
            <div id="resource-container">
                <h2 id="resources-subtitle">
                    Curriculum Resource:
                </h2>
                <a className="link" href="https://www.theodinproject.com/" target="_blank">
                    <h3 id="resource-name">
                        The Odin Project
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I started using The Odin project when I decided I wanted to learn to program. The curriculum is free and has no set time frame for completion, learners go at their own pace. The Odin Project utilizes lots of articles, a few videos, and several hands on projects to guide learners to their end programming goal.
                </p>
                <p id="resource-paragraph">
                    All learners start with the Foundations path and then choose to pursue the JavaScript or Ruby on Rails path for the second part of the curriculum. I will discuss the Foudation and JavaScript sections, as I have not looked at the Ruby on Rails section.
                </p>
                <p id="resource-paragraph">
                    The Foundation section of The Odin Project has seven learning sections. Learners start with the Introduction, Prerequisites, and Git Basics sections. In these sections I read about what the course would offer, was invited to join the discord, set up my virtual machine, and GitHub account.
                </p>
                <p id="resource-paragraph">
                    After the basics and setting up my computer to start learning, I completed units on HTML, CSS, Flexbox, and basic JavaScript. While in the Foundation section I created several projects.
                </p>
                <p id="resource-paragraph">
                    Once I finished the Foundation section of the curriculum, I started a deeper dive into JavaScript, choosing the Full Stack JavaScript path instead of Ruby on Rails. This path has six units, with all being very thorough.
                </p>
                <p id="resource-paragraph">
                    During the JavaScript Full Stack path, I completed two units on HTML and CSS, intermediate and advanced. During the intermediate unit I learned about validating forms, grid, and looked deeper into flexbox. In the advanced unit, I learned about animation, accessibility for all users, and responsive design.
                </p>
                <p id="resource-paragraph">
                    The JavaScript unit in the Full Stack path focused on many aspects of JavaScript. I learned about objects, object constructors, factory functions, classes, webpack, linting, json, asynchronous code, APIs, and testing. This section also contained more information about GitHub and some computer science. I created many projects during this time to practice what I was learning.
                </p>
                <p id="resource-paragraph">
                    After those sections, I advanced to learning React. Through the course I learned how to set up a React environment, how to use JSX in my components, how to pass data between components, and how to use React Router. The section also covered some React testing basics and fetching APIs with React.
                </p>
                <p id="resource-paragraph">
                    Once I completed the React section it was time to learn about creating a backend for my projects. The curriculum utilizes NodeJS, Express, and MongoDB for this purpose. I learned how to create routes, controllers, and models for my databases. I also learned how to use Pug and EJS templates to render my code on the frontend. After learning those things, I started creating APIs to use with frontend frameworks to create fullstack projects both ways.
                </p>
                <p id="resource-paragraph">
                    The curriculum finishes with a section that helps the learner prepare for job interviews, create their resume, and polish the portfolio project the learner created earlier in the curriculum. Overall, I think this was a great curriculum for me to start with. I knew nothing about programming when I first decided to learn and it's been a great resource for a beginner.
                </p>
                <h2 id="resources-subtitle">
                    Visual Studio Code:
                </h2>
                <a className="link" href="https://code.visualstudio.com/" target="_blank">
                    <h3 id="resource-name">
                        VS Code
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I gave VS Code its own space. I have used this on every project I have ever made. It is a very nice program. Look more into it if you haven't, you will not be disapointed. Also, it's free!
                </p>
                <h2 id="resources-subtitle">
                    CSS Resources:
                </h2>
                <a className="link" href="https://flexbox.malven.co/" target="_blank">
                    <h3 id="resource-name">
                        Flexbox Cheat Sheet
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is a great visual reference for Flexbox. I have shared this with several people that ask for help in The Odin Project's Discord. I found it while working in the Foundations section of The Odin Project, it may have been on a Google search or it could have been from their curriculum, I can't remember at this point!
                </p>
                <a className="link" href="https://flexboxfroggy.com/" target="_blank">
                    <h3 id="resource-name">
                        Flexbox Froggy
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is a fun game that is great to practice writing code using Flexbox.
                </p>
                <a className="link" href="https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties" target="_blank">
                    <h3 id="resource-name">
                        A Complete Guide To CSS Grid
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is a great visual resource for using CSS Grid.
                </p>
                <h2 id="resources-subtitle">
                    Free Icons, Images, Gifs, and Fonts:
                </h2>
                <a className="link" href="https://fonts.google.com/" target="_blank">
                    <h3 id="resource-name">
                        Google Fonts
                    </h3>
                </a>
                <p id="resource-paragraph">
                    You can find a lot of different fonts to import in projects on this website.
                </p>
                <a className="link" href="https://fonts.google.com/icons" target="_blank">
                    <h3 id="resource-name">
                        Google Icons
                    </h3>
                </a>
                <p id="resource-paragraph">
                    You can find a lot of different icons to import in projects on this website.
                </p>
                <a className="link" href="https://devicon.dev/" target="_blank">
                    <h3 id="resource-name">
                        Devicon
                    </h3>
                </a>
                <p id="resource-paragraph">
                    Devicon has several icons from famous brands and sites. This is where I found my GitHub icon on my portfolio.
                </p>
                <a className="link" href="https://www.pexels.com/" target="_blank">
                    <h3 id="resource-name">
                        Pexels
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is a great resource for finding free open source images for projects.
                </p>
                <a className="link" href="https://pixabay.com/" target="_blank">
                    <h3 id="resource-name">
                        Pixabay
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is another great resource for finding free open source images for projects.
                </p>
                <a className="link" href="https://developers.giphy.com/" target="_blank">
                    <h3 id="resource-name">
                        Giphy
                    </h3>
                </a>
                <p id="resource-paragraph">
                    This is a great API I've used to add gifs to projects. 
                </p>
                <h2 id="resources-subtitle">
                    Date Formatting:
                </h2>
                <a className="link" href="https://momentjs.com/" target="_blank">
                    <h3 id="resource-name">
                        Moment.js
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I used this resource to format my dates on the frontend. It is very easy to use with lots of resources if you get stuck.
                </p>
                <h2 id="resources-subtitle">
                    Debugging and Testing:
                </h2>
                <a className="link" href="https://developer.chrome.com/docs/devtools/javascript/" target="_blank">
                    <h3 id="resource-name">
                        Chrome Dev Tools
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I use Chrome Dev Tools almost everyday that I spend programming. It is extremely helpful for finding issues in the code, front and back end.
                </p>
                <h2 id="resources-subtitle">
                    Project Hosting:
                </h2>
                <a className="link" href="https://github.com/" target="_blank">
                    <h3 id="resource-name">
                        GitHub Pages
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I used this resource to host my JavaScript projects. It works well and it's easy to create pages when already using a GitHub Repository to store projects.
                </p>
                <a className="link" href="https://app.netlify.com/" target="_blank">
                    <h3 id="resource-name">
                        Netify
                    </h3>
                </a>
                <p id="resource-paragraph">
                    I used this resource to host my React projects for others to view. It is a free resource and works great.
                </p>
            </div>
        </div>
    )
}
