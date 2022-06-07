import React from "react";
import me from "placeholder";

function About() {
    return (
        <div>
            <section>
                <img id="myImg" src={me} alt="me"></img>
                <h1 className="opening">Hello, my name is John, and I'm a Developer in the Triangle area.</h1>
                <p>I have a degree in computer science from the University of North Carolina at Chapel Hill and a 
                   certificate in full stack web development from the same.  </p>
                <p> I am a junior Developer with experience in the MERN Full Stack environment.</p>

            </section>
        </div>
    )
}

export default About;