import React, {useState} from 'react';
import Logo from '../assest/pizzaLogo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';
function Navbar(){
    const [openLinks,setopenLinks]=useState(false);
    const toggleNavbar=()=>{
        setopenLinks(!openLinks);
    }
	    return(
      <div className='navbar'>
	            <div className='leftside' id={openLinks ? "open":"close"}>
	                <img src={Logo} alt='image'/>
                    <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/Menu'>Menu</Link>
                    <Link to='/AboutUs'>AboutUs</Link>
                    <Link to='/Contact'>ContactUS</Link>
                    </div>
	            </div>
	            <div className='righttside'>
                    <Link to='/'>Home</Link>
                    <Link to='/Menu'>Menu</Link>
                    <Link to='/AboutUs'>AboutUs</Link>
                    <Link to='/Contact'>ContactUS</Link>
                   <button onclick={toggleNavbar}><MenuIcon /></button>
                </div>
	        </div>
	    );
	}
	export default Navbar;
