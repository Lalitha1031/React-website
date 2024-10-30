import React from 'react';
import image1 from '../assest/pizzaLeft.jpg';
import '../styles/Contact.css';
function Contact()
{
return(
<div className='contact'>
    <div className='leftSide' style={{backgroundImage: `url(${image1})`}}></div>
    <div className='rightSide'>
        <h1>Contact US</h1>
        <form id='contact-form'>
            <label htmlFor='name'>Full Name:</label>
            <input name='name'type="text" placeholder='Enter full name...'/>
            <label htmlFor='Email'>Email Address:</label>
            <input name='Email' type="email" placeholder='Enter Email Address...'/>
            <label >Message</label>
            <textarea></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>
);
}
export default Contact;