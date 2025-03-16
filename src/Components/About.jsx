import { useEffect, useRef } from "react";
import gsap from "gsap";
import './About.css';
import portfolioImg from "../Assets/portfolioImg2.jpg";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
    const aboutContentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            aboutContentRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3.5, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="about_container">
            <div className='about_content' ref={aboutContentRef}>
                <div className="about_image">
                    <img src={portfolioImg} alt='portfolio snap' />
                </div>
                <div className="about_text">
                    <h1>A developer, <br />
                        problem solver, <br />
                        and a constant learner.
                    </h1>
                    <p>A code enthusiast with a unique blend of front-end development skills and a passion for creating user-centered interfaces. I thrive on building projects that are both functional and aesthetically pleasing, always keeping accessibility in mind. When I'm not coding, you might find me enjoying live music or cooking.</p>

                    <div className="about_buttons">
                        <a href="https://www.linkedin.com/in/nikhilbokade/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://github.com/nikhilbokade25" target="_blank" rel="noopener noreferrer" className="github-button">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}