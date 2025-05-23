import React from 'react'
import {location} from '../../data/data'
import Heading from '../../../components/common/Heading'
import './location.css';

const Location = () => {
    return (
        <>
            <div className="location">
                <div className="container">
                    <Heading title="Explore By Location" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
                    <div className='grid3'>
                        {location.map((item,index) =>(
                            <div className="box" key={index}>
                                <img src={item.cover} alt="" />
                                <div className="overlay">
                                    <h4>{item.name}</h4>
                                    <p>
                                        <label htmlFor="" className='me-3'>{item.Villas}</label>
                                        <label htmlFor="" className='me-3'>{item.Offices}</label>
                                        <label htmlFor="" className='me-3'>{item.Apartments}</label>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location