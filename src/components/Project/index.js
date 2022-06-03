import React from "react";

function Project(props) {
    return (
    <div>
        <img src="" alt="" />
        <h4 alt={props.name}  className="project-title">{props.name}</h4>
        <a href={props.github} alt="Github repository" >Github link</a>
        <a href={props.deployed} alt="deployed app">Deployed project</a>
    </div>)
}

export default Project;