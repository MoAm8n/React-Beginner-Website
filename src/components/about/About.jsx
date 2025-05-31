import React from 'react'
import Heading from '../common/Heading'
import Back from '../common/Back'
import image from '../image/a1.jpg'
import './about.css'
const About = () => {
    return (
        <>
            <section className='about'>
                <Back name="About Us" title="About Us - Who We Are?" cover={image}/>
                <div className="container">
                    <div className="row py-5">
                    <div className="title col-12 col-md-6">
                        <Heading title="Our Agency Story" subtitle="Check out our company story and work process"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <button className='rounded-5'>More About Us</button>
                    </div>
                    <div className="img col-12 col-md-6">
                        <img src={process.env.PUBLIC_URL + "/images/about.jpg"} alt="Logo" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About