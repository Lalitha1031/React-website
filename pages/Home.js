import React from 'react';
import { Link } from 'react-router-dom';
import Bimage from '../assest/pizza.jpeg';
import '../styles/Home.css';
function Home()
{
    return(
        <div className='home'style={{backgroundImage: `url(${Bimage})`}}>
            <div className='headerContainer' >
                <h1>Pizza Pyar</h1>
                <p>Share Pizza,Share Kindness</p>
                <Link to='/Menu'><button>ORDER NOW</button></Link>
            </div>
        </div>
    );
}
export default Home;