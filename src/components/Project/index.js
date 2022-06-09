import React from "react";

function Project( {github, name, isDeployed, deployed}) {
    console.log( github.slice(30) )
    const imgName= github.slice(30);
    console.log(`../../assets/projectImgs/${imgName}.png`)
    return (
    <article className="mx-2 my-3 project-card">
        <img src={require(`../../assets/projectImgs/${imgName}.PNG`)} alt={name} />
        <div className="project-label">
            <h4 alt={name}  className="project-title">{name}</h4>
            <p>
            <a href={github} alt="Github repository" >Github link</a>
            </p>
            { isDeployed ? <p><a href={deployed} alt="deployed app">Deployed project</a></p> : <></>}
        </div>
    </article>)
}

export default Project;