// import './Projects.css';
// import boostrVideo from "../Assets/Boostr.mp4";
// import frostyDelightsVideo from "../Assets/FrostyDelights.mp4";
// import theCandleLabVideo from "../Assets/TheCandleLab.mp4";

// export default function Projects() {
//     return (
//         <div className="projects_container">
//             <h1>Featured Works</h1>
            

//             <div className='project'>
//                 <div className="project_video">
//                     <video src={boostrVideo} autoPlay loop muted></video>
//                 </div>
//                 <div className="project_details">
//                     <h2>Boostr</h2>
//                     <p>A high-energy soda brand designed to keep you refreshed and charged up throughout the day.</p>
//                     <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
//                     <div className="project_buttons">
//                         <button onClick={() => window.open('https://boostr.com', '_blank')}>Live Website</button>
//                         <button onClick={() => window.open('https://github.com/nikhilbokade25/Boostr', '_blank')}>GitHub</button>
//                     </div>
//                 </div>
//             </div>


//             <div className='project'>
//                 <div className="project_video">
//                     <video src={frostyDelightsVideo} autoPlay loop muted></video>
//                 </div>
//                 <div className="project_details">
//                     <h2>Frosty Delights</h2>
//                     <p>An ice cream brand that brings you the creamiest flavors and the most delightful experience.</p>
//                     <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
//                     <div className="project_buttons">
//                         <button onClick={() => window.open('https://frostydelights.com', '_blank')}>Live Website</button>
//                         <button onClick={() => window.open('https://github.com/nikhilbokade25/FrostyDelights', '_blank')}>GitHub</button>
//                     </div>
//                 </div>
//             </div>
            

//             <div className='project'>
//                 <div className="project_video">
//                     <video src={theCandleLabVideo} autoPlay loop muted></video>
//                 </div>
//                 <div className="project_details">
//                     <h2>The Candle Lab</h2>
//                     <p>A candle-making experience where you can craft your own scents and create lasting memories.</p>
//                     <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
//                     <div className="project_buttons">
//                         <button onClick={() => window.open('https://thecandlelab.com', '_blank')}>Live Website</button>
//                         <button onClick={() => window.open('https://github.com/nikhilbokade25/TheCandleLab', '_blank')}>GitHub</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

import { useEffect, useRef } from 'react';
import './Projects.css';
import boostrVideo from "../Assets/Boostr.mp4";
import frostyDelightsVideo from "../Assets/FrostyDelights.mp4";
import theCandleLabVideo from "../Assets/TheCandleLab.mp4";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projectsRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            projectRefs.current,
            {
                x: '-100%', // Initially positioned off-screen (from left)
                opacity: 0,
            },
            {
                x: '0%', // Move to original position
                opacity: 1, // Fade in
                duration: 1,
                ease: 'power4.out',
                stagger: 0.3, // Stagger the animations for each project
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top 80%', // Trigger when the project container is 80% from the top of the viewport
                    end: 'bottom 20%',
                    scrub: true, // Optional: smooth scrolling effect
                    markers: false, // Set to true if you want to debug the scroll trigger
                },
            }
        );
    }, []);

    return (
        <div className="projects_container" ref={projectsRef}>
            <h1>Featured Works</h1>

            <div className='project' ref={(el) => projectRefs.current[0] = el}>
                <div className="project_video">
                    <video src={boostrVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>Boostr</h2>
                    <p>A high-energy soda brand designed to keep you refreshed and charged up throughout the day.</p>
                    <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://boostr.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/Boostr', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>

            <div className='project' ref={(el) => projectRefs.current[1] = el}>
                <div className="project_video">
                    <video src={frostyDelightsVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>Frosty Delights</h2>
                    <p>An ice cream brand that brings you the creamiest flavors and the most delightful experience.</p>
                    <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://frostydelights.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/FrostyDelights', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>

            <div className='project' ref={(el) => projectRefs.current[2] = el}>
                <div className="project_video">
                    <video src={theCandleLabVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>The Candle Lab</h2>
                    <p>A candle-making experience where you can craft your own scents and create lasting memories.</p>
                    <p><b>Skills:</b> HTML5, CSS3, GSAP, React.js </p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://thecandlelab.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/TheCandleLab', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
