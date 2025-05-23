import React from 'react'
import {featured} from '../../data/data'
const FeaturedCard = () => {
    return (
        <div>
            <div className="featuredCard grid5">
                {featured.map((items, index) =>(
                    <div className="box" key={index}>
                        <img src={items.cover} alt=""/>
                        <h2>{items.name}</h2>
                        <p>{items.total}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FeaturedCard