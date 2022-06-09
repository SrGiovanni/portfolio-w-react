import React from "react";
import resume from '../../assets/files/JohnResume202206.pdf'

export default function Resume() {
    return(
        <>
            <div>
                <h2>Resume</h2>
                <p> Download my <a href={resume}>resume</a> </p>
                <div className="pro-con flex-row" >
                    <div className="front-end-procon">
                        <h2>Front End</h2>
                        <h4>Languages</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript | ES5 & ES6</li>
                        </ul>
                        <h4>Frameworks and Libraries</h4>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="back-end-procon">
                        <h2>Back End</h2>
                        <h4>Languages and Frameworks</h4>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>SQL, MySQL, Sequelize</li>
                            <li>NoSQL, MongoDB</li>
                        </ul>
                        <h4>Tools and Technologies</h4>
                        <ul>
                            <li>Github</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}