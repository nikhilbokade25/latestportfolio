import React, { useEffect, useRef } from 'react';
import './Hero.css';
import portfolioImg from "../Assets/portfolioImg2.jpg";
import gsap from 'gsap';

export default function Hero() {
    const heroTextRef = useRef(null);
    const revealDivRef = useRef(null);
    const portfolioImageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroTextRef.current.children,
            {
                y: '-100%',
                opacity: 0,
            },
            {
                y: '0%',
                opacity: 1,
                duration: 9.5,
                ease: 'power4.out',
                stagger: 0.5,
            }
        );

        gsap.fromTo(revealDivRef.current, {
            height: '100vh',
            
        }, {
            height: '0vh',
            duration: 1.5,
            ease: 'power4.in',
        });

        gsap.fromTo(
            portfolioImageRef.current, 
            {
                scale: 0, 
                opacity: 0, 
            },
            {
                scale: 1, 
                opacity: 1, 
                duration: 2.8,
                ease: 'power4.out',
                delay: 1.7, 
            }
        );

    }, []);

    return (
        <div className="hero_container">
            <div className="hero_content">
                <div className="hero_text" ref={heroTextRef}>
                    <h1>Hello! I'm Nikhil.</h1>
                    <p>A front-end developer who’s passionate about crafting fun and engaging user experiences. He loves going to concerts, gazing at the sky and appreciating things made to last.</p>
                </div>

                <div className="hero_image">
                    <div className="portfolio_image">
                        <img src={portfolioImg} alt="Portfolio" ref={portfolioImageRef} /> {/* Add ref here */}
                    </div>
                </div>
            </div>
            
            <div className='arrow'>
                <p>&darr;</p>
            </div>

            <div className="reveal_div" ref={revealDivRef}>
            </div>
        </div>
    );
}