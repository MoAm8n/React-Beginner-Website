import React from 'react'
import Back from '../common/Back'
import image from '../image/pricing.jpg'
import './contact.css'
const Contact = () => {
    return (
        <>
            <section className='contact'>
                <Back name="Contact Us" title="Get Helps & Friendly Support" cover={image}/>
                <div className="container mb-5">
                    <form action="" className='shadow p-4'>
                        <h1 className='pb-2 fw-bold'>Fillup The Form</h1>
                        <div className='d-md-flex justify-content-md-between gap-1'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <textarea cols="30" rows="10" ></textarea>
                        <button>Submit Request</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact