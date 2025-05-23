import React from 'react'
import Back from '../common/Back'
import img from '../image/services.jpg'
import FeaturedCard from '../home/featured/FeaturedCard'
import '../home/featured/featured.css'
import Heading from '../common/Heading'
const Services = () => {
    return (
        <>
            <section className='services mb-5'>
                <Back name="Services" title="Services -All Services" cover={img}/>
                <div className="featured container">
                    <Heading title ="Featured Property Types"/>
                    <FeaturedCard/>
                </div>
            </section>
        </>
    )
}

export default Services