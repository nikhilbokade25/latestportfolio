import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; 
import './Collab.css';

gsap.registerPlugin(ScrollTrigger); 

export default function Collab() {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const collabContainerRef = useRef(null); 

    const handleEmailClick = () => {
        window.location.href = "mailto:nikhilbokade25@gmail.com?subject=Collaboration Inquiry";
    };

    useEffect(() => {
        gsap.fromTo(headingRef.current, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: collabContainerRef.current, 
                start: "top 60%", 
                end: "center center", 
                scrub: 0.5, 
            },
        });

        gsap.fromTo(textRef.current, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
           
            scrollTrigger: {
                trigger: collabContainerRef.current, 
                start: "top 60%", 
                end: "center center", 
                scrub: 0.5, 
                delay: 1,

            },
        });
    }, []);

    return (
        <div className="collab_container" ref={collabContainerRef}>
            <div className="collab_heading" ref={headingRef}>
                <h1>Ready to launch your vision?</h1>
            </div>
            <div className="collab_text" ref={textRef}>
                <p>Nikhil is excited to help bring your web development vision to life! I'm ready to collaborate and contribute my front-end skills to your next impactful project.</p>
                <button onClick={handleEmailClick}>Collab with Nikhil</button>
            </div>
        </div>
    );
}
