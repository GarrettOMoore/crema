import React from 'react'
import LogoTwo from '../Images/blackontransparent.png'

const About = (props) => {
    return(
        <div className='main'>
        	<h1>About</h1>
        	<div className='text-box'>
        		<p className='sub-header'>For Coffee and Music lovers everywhere</p>
        		<p className='about-text'>Crema aims to provide a place you can use not only as a reference for making or talking about coffee - but a place where you can check out the best local roasters, and hear curated playlists based on your individual tastes.</p>
        		<img className='logo-two' alt='logo'src={LogoTwo}/>
        	</div>
        	<p className='footer-text'>Created by Garrett Moore 2019</p>
        	<p className='footer-text'>With:</p>
        	<p className='footer-text'>Brew Methods from Stumptown Coffee</p>
        	<p className='footer-text'>Coffee Production data from the ICO</p>
        	<p className='footer-text'>Local Roaster Search from the Yelp Fusion API</p>
        </div>
    )
}

export default About