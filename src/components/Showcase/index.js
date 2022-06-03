import React from "react";

import Project from "../Project";

// project properties object template: { name: '', github: '', deployed: ''}

function Showcase(props) {
    const projects = [
        { name: '', github: '', deployed: ''}
    ]
    return( 
        <div>
            <ul>
            {projects.map( (project) => {
              return <li 
                    key={ project.name }
                    >
                        <Project     
                        name={ project.name }
                        github={ project.github }
                        deployed={ project.deployed }
                         />
                    </li>
            })}
            </ul>
        </div>)
}

export default Showcase;