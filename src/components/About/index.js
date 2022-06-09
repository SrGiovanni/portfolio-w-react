import React from "react";
import me from "../../assets/avatar/avatar.png";

function About() {
    return (
     
            <section className="about-card">
                <div className="flex-row">
                    <img id="myImg" src={me} alt="me"></img>
                    <h2 className="opening">Hello, my name is John, and I'm a junior Developer in the Triangle area.</h2>
                </div>
                <div>
                    <p>I have a degree in computer science from the University of North Carolina at Chapel Hill and a 
                    certificate in full stack web development from the same.  </p>
                    <p> I am a junior Developer with experience in the MERN Full Stack environment.</p>
                </div>

            </section>
        
    )
}

export default About;