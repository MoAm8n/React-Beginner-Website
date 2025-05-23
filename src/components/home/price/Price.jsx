import React from 'react'
import PriceCard from './PriceCard'
import './price.css'
import Heading from '../../../components/common/Heading'

const Price = () => {
    return (
        <div>
            <div className="price">
                <div className="container">
                    <Heading title="Select Your Package" subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"/>
                    <PriceCard/>
                </div>
            </div>
        </div>
    )
}

export default Price