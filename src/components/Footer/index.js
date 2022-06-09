import React from 'react';
// import resume from '../assets/files'

export default function Footer() {

    return(
        <footer>
            <ul className='flex-between mx-2'>
                <li>Tel: 919-260-5414</li>
                <li className="nowrap"><a className="" href="mailto:samuelefulghi@gmail.com">Email me</a></li>
                <li><a href="https://www.linkedin.com/in/john-samuel-fulghieri-53b418105/">LinkedIn</a></li>
                <li><a href="https://github.com/SrGiovanni">GitHub</a></li>
                {/* <li><a href="/" target="_blank" rel='noreferrer' download>Resume</a></li> */}
                <li>©2022 John Fulghieri</li>
            </ul>
        </footer>
    )
}