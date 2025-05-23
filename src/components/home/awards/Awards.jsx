import React from 'react'
import { awards } from '../../data/data'
import Heading from '../../../components/common/Heading'
import './awards.css'
const Awards = () => {
    return (
        <>
            <div className="awards">
                <div className="container">
                    <Heading title="Our Awards" subtitle="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"/>
                    <div className='grid4'>
                        {awards.map((item, index) =>(
                            <div className="box" key={index}>
                                <div className="icon">
                                    <span>{item.icon}</span>
                                </div>
                                <h1>{item.num}</h1>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards