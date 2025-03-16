import './Footer.css';

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_content">
            <div className='footer_linkedin'>
                <h2>
                    Say hi to Nikhil at&nbsp;
                    <a href="mailto:nikhilbokade25@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}>
                        nikhilbokade25@gmail.com
                    </a>  
                    &nbsp;or view his full work experience on&nbsp;  
                    <a href="https://www.linkedin.com/in/nikhilbokade/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
                        LinkedIn
                    </a>
                </h2>
            </div>


                <div className='footer_about'>
                    <h1>ABOUT NIKHIL</h1>
                </div>
            </div>
        </div>
    );
}