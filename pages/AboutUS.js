import React from 'react';
import images from '../assest/multiplePizzas.jpeg'
import '../styles/AboutUS.css';
function AboutUS(){
    return(
        <div className='about'>
            <div className='aboutTop' style={{backgroundImage: `url(${images})`}}></div>
        <div className='aboutBottom'>
            <h1>About US</h1>
        <p>Welcome to [Cafe Name], where passion for pizza meets a cozy café vibe! Located in the heart of [Location], we’re a family-owned pizzeria dedicated to bringing you fresh, hand-crafted pizzas with a twist. Every pie we create is made with love and the freshest ingredients, from our signature dough made daily to the vibrant, locally-sourced toppings.

At [Cafe Name], we believe that pizza is more than just food—it’s a shared experience. Whether you're grabbing a slice on the go or relaxing in our laid-back café atmosphere, we’re here to make every visit special. Our menu offers something for everyone, from classic Margheritas to creative, seasonal flavors you won’t find anywhere else.

Come in, grab a slice, and feel at home. At [Cafe Name], we’re more than just pizza—we’re a community.</p></div>

        </div>
            );
}
export default AboutUS;