import './Projects.css';
import boostrVideo from "../Assets/Boostr.mp4";
import frostyDelightsVideo from "../Assets/FrostyDelights.mp4";
import theCandleLabVideo from "../Assets/TheCandleLab.mp4";

export default function Projects() {
    return (
        <div className="projects_container">
            <h1>Featured Works</h1>
            

            <div className='project'>
                <div className="project_video">
                    <video src={boostrVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>Boostr</h2>
                    <p>A high-energy soda brand designed to keep you refreshed and charged up throughout the day.</p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://boostr.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/Boostr', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>


            <div className='project'>
                <div className="project_video">
                    <video src={frostyDelightsVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>Frosty Delights</h2>
                    <p>An ice cream brand that brings you the creamiest flavors and the most delightful experience.</p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://frostydelights.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/FrostyDelights', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>
            

            <div className='project'>
                <div className="project_video">
                    <video src={theCandleLabVideo} autoPlay loop muted></video>
                </div>
                <div className="project_details">
                    <h2>The Candle Lab</h2>
                    <p>A candle-making experience where you can craft your own scents and create lasting memories.</p>
                    <div className="project_buttons">
                        <button onClick={() => window.open('https://thecandlelab.com', '_blank')}>Live Website</button>
                        <button onClick={() => window.open('https://github.com/nikhilbokade25/TheCandleLab', '_blank')}>GitHub</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
