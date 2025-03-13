import './Hero.css';
import portfolioImg from "../Assets/portfolioImg2.jpg";

export default function Hero(){
    return(
        <div className="hero_container">
            <div className="hero_content">
                <div className="hero_text">
                    <h1>Hello! I'm Nikhil.</h1>
                    <p>A front-end developer who’s passionate about crafting fun and engaging user experiences. He loves going to concerts, gazing at the sky and appreciating things made to last.</p>

                </div>

                <div className="hero_image">
                    <div className="portfolio_image">
                        <img src={portfolioImg} />
                    </div>
                </div>
            </div>

            
            
        </div>
    );
}