import React from 'react'
import {price} from '../../data/data'

const PriceCard = () => {
    return (
        <>
            <section className='priceCard'>
                <div className="container">
                    <div className="grid3">
                        {price.map((item,index) =>(
                            <div className="box" key={index}>
                                <div className="bestBtn">
                                    <button>{item.best}</button>
                                </div>
                                <div className='title'>
                                    <h2>{item.plan}</h2>
                                    <h1>
                                        <span>$</span>
                                        {item.price}
                                    </h1>
                                    <p>{item.ptext}</p>
                                </div>
                                <ul className='list-item'>
                                    {item.list.map((props) =>{
                                        const {icon,text,change} = props
                                        return(
                                        <li>
                                            <label style={{background : change === "color" ? "#dc35451f" : "#27ae601f",
                                                            color: change === "color" ? "#dc3848" : "#27ae60"}}>
                                                {icon}</label>
                                                {text}
                                        </li>
                                        )
                                    })}
                                </ul>
                                <button className='btn5 rounded-5 fs-4' style={{background : item.plan === "Standard" ? "#27ae60" : "#fff" ,
                                                                color: item.plan === "Standard" ? "#fff" : "#27ae60"}}>
                                                Start {item.plan}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceCard