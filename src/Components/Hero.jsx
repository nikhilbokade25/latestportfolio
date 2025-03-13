import React, { useEffect, useRef } from 'react';
import './Hero.css';
import portfolioImg from "../Assets/portfolioImg2.jpg";
import gsap from 'gsap';

export default function Hero() {
    const revealDivRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(revealDivRef.current, {
            height: '100vh',
            
        }, {
            height: '0vh',
            duration: 1.5,
            ease: 'power4.in',
        });
    }, []);

    return (
        <div className="hero_container">
            <div className="hero_content">
                <div className="hero_text">
                    <h1>Hello! I'm Nikhil.</h1>
                    <p>A front-end developer who’s passionate about crafting fun and engaging user experiences. He loves going to concerts, gazing at the sky and appreciating things made to last.</p>
                </div>

                <div className="hero_image">
                    <div className="portfolio_image">
                        <img src={portfolioImg} alt="Portfolio" />
                    </div>
                </div>
            </div>
            <div className="reveal_div" ref={revealDivRef}>
                
            </div>
        </div>
    );
}