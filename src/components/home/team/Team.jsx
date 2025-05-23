import React from 'react'
import './team.css'
import {team} from '../../data/data'
import Heading from '../../../components/common/Heading'
const Team = () => {
    return (
        <>
            <section className="team">
                <div className="container">
                    <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
                    <div className='grid3'>
                        {team.map((item, index) =>(
                            <div className="box" key={index}>
                                <button className='btn2'>{item.list} Listings</button>
                                <div className="imgP">
                                    <div className="img">
                                    <img src={item.cover} alt=""/>
                                    <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                </div>
                                <div className="title">
                                    <h5><i class="fa-solid fa-location-dot me-3"></i>
                                        {item.address}</h5>
                                    <h3>{item.name}</h3>
                                </div>
                                <ul className='flex justify-content-center gap-4'>
                                    {item.icon.map((items, icons)=>(
                                        <li key={icons}>{items}</li>
                                    ))}
                                </ul>
                                <div className="button flex">
                                    <button className='btn1'>
                                        <i class="fa-solid fa-envelope"></i>Message
                                    </button>
                                    <button className='btn bg-dark text-white py-3 px-4 '>
                                        <i class="fa-solid fa-phone"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team