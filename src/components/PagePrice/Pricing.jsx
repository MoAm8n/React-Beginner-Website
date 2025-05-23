import React from 'react'
import Back from '../common/Back'
import image from '../image/pricing.jpg'
import PriceCard from '../home/price/PriceCard'
import '../home/price/price.css'
const Pricing = () => {
    return (
        <>
            <section className='pricing'>
                <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={image}/>
                <div className="container price">
                    <PriceCard/>
                </div>
            </section>
        </>
    )
}

export default Pricing