import React from "react";

import Project from "../Project";

// project properties object template: { name: '', github: '', isDeployed: '', deployed: ''}

function Showcase() {
    const projects = [
        { name: 'Hypergeometric Blog', github: 'https://github.com/SrGiovanni/hypergeometric-blog', isDeployed: 'true', deployed: 'https://stark-river-35516.herokuapp.com/'},
        { name: 'README generator', github: 'https://github.com/SrGiovanni/README-generator', isDeployed: 'false', deployed: ''},
        { name: 'Weather Dash', github: 'https://github.com/SrGiovanni/weather-dash', isDeployed: 'true', deployed: 'https://srgiovanni.github.io/weather-dash/'},
        { name: 'Mr Budget Tracker', github: 'https://github.com/SrGiovanni/mr-budget-tracker', isDeployed: 'true', deployed: 'https://mr-budget-12345.herokuapp.com/'},
        { name: 'Note Taker', github: 'https://github.com/SrGiovanni/note-taker', isDeployed: 'true', deployed: 'https://damp-plains-90541.herokuapp.com/'},
        { name: 'Taskmaster Pro', github: 'https://github.com/SrGiovanni/taskmaster-pro', isDeployed: 'true', deployed: 'https://srgiovanni.github.io/taskmaster-pro/'}
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
                        isDeployed= { project.isDeployed }
                        deployed={ project.deployed }
                         />
                    </li>
            })}
            </ul>
        </div>)
}

export default Showcase;