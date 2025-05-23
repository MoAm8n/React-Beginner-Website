import React from 'react'
import './hero.css'
import Heading from '../../../components/common/Heading'
const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <div className="container">
                    <Heading title="Search Your Next Home" subtitle="Find new & Featured proper property located in your local city." />
                    <form className='flex'>
                        <div className="box">
                            <span>City/street</span>
                            <input type="text" placeholder='Location'/>
                        </div>
                        <div className="box">
                            <span>Property Type</span>
                            <input type="text" placeholder='Property Type'/>
                        </div>
                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder='Price Range'/>
                        </div>
                        <div className="box">
                            <h4>Advance Filter</h4>
                            <button className='btn1'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Hero