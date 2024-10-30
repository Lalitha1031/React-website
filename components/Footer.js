import React from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Linkedin from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import '../styles/Footer.css';
function Footer(){
    return(
        <div className='footer'>
            <div className='socialMedia'>
                <Instagram/>
                <Twitter/>
                <Linkedin/>
                <Facebook/>
            </div>
            <p>&copy; 2024@LalithaDivakarla</p>
        </div>
    );
}
export default Footer;