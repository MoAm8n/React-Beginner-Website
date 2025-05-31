import React from 'react'
import {footer} from '../../data/data'
import './footer.css'
const Footer = () => {
    return (
        <>
        <section className='footerContact'>
            <div className="container">
                <div className="send flex gap-2">
                    <div className="title">
                        <h1 className='fw-bold'>Do You Have Questions ?</h1>
                        <p>We'll help you to grow your career and growth.</p>
                    </div>
                    <div>
                        <button className='contactBtn'>Contact Us Today</button>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="grid4">
                    <div className="box1">
                        <img src={process.env.PUBLIC_URL + "/images/logo-light-footer.png"} alt="Logo" />
                        {/* <img src="../images/logo-light-footer.png" alt="" /> */}
                        <h3>Do You Need Help With Anything?</h3>
                        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                        <div className='flex gap-3'>
                            <input type='text' placeholder='Email Address'/>
                            <button className='suBtn rounded-2'>Subscribe</button>
                        </div>
                    </div>
                    {footer.map((props)=>(
                        <div className="box4">
                            <h4>{props.title}</h4>
                            <ul>
                                {props.text.map((items) => (
                                    <li>{items.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer