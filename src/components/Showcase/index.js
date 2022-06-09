import React from "react";

import Project from "../Project";

// project properties object template: { name: '', github: '', isDeployed: '', deployed: ''}

function Showcase() {
    const projects = [
        { name: 'Deep Thoughts', github: 'https://github.com/SrGiovanni/deep-thoughts', isDeployed: true, deployed: 'https://pacificus-thoughts.herokuapp.com/'},
        { name: 'Hypergeometric Blog', github: 'https://github.com/SrGiovanni/hypergeometric-blog', isDeployed: true, deployed: 'https://stark-river-35516.herokuapp.com/'},
        { name: 'README generator', github: 'https://github.com/SrGiovanni/README-generator', isDeployed: false, deployed: ''},
        { name: 'Weather Dash', github: 'https://github.com/SrGiovanni/weather-dash', isDeployed: true, deployed: 'https://srgiovanni.github.io/weather-dash/'},
        { name: 'Mr Budget Tracker', github: 'https://github.com/SrGiovanni/mr-budget-tracker', isDeployed: true, deployed: 'https://mr-budget-12345.herokuapp.com/'},
        { name: 'Note Taker', github: 'https://github.com/SrGiovanni/note-taker', isDeployed: true, deployed: 'https://damp-plains-90541.herokuapp.com/'}
    ]
    return( 
        <section>
            <h2>Selected projects</h2>
            <ul className="flex-row">
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
        </section>)
}

export default Showcase;