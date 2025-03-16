import './Collab.css';

export default function Collab(){
    const handleEmailClick = () => {
        window.location.href = "mailto:nikhilbokade25@gmail.com?subject=Collaboration Inquiry";
    };

    return(
        <div className="collab_container">
            <div className='collab_heading'>
                <h1>Ready to launch your vision?</h1>
            </div>
            <div className='collab_text'>
                <p>Nikhil is excited to help bring your web development vision to life! I'm ready to collaborate and contribute my front-end skills to your next impactful project.</p>
                <button onClick={handleEmailClick}>Collab with Nikhil</button>
            </div>
        </div>

    );
}