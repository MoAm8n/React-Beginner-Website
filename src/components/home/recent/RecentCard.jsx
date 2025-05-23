import React from 'react'
import {list} from '../../data/data'
const RecentCard = () => {
    return (
        <div>
            <div className="recentCard grid3 mt-5">
                {list.map((item,index) =>{
                    const {cover, name, location, category, price, type} =  item
                    return(
                    <div className="box" key={index}>
                        <div className="img">
                            <img src={cover} alt="" />
                        </div>
                        <div className="text">
                            <div className="category flex">
                                <span className='p-2' style={{  
                                    background : category === "For Sale" ? "#25b5791a" : "#ff98001a", 
                                    color:category === "For Sale" ? "#25b579" : "#ff9800"}}>
                                {category}
                                </span>
                                <i class="fa-regular fa-heart fs-4"></i>
                            </div>
                            <h4 className='text-center p-2'>{name}</h4>
                            <p className='text-center m-0'><i class="fa-solid fa-location-dot me-2"></i>{location}</p>
                        </div>
                            <div className='p-3 flex'>
                                <div>
                                    <button className='btn1 rounded-5 p-2 me-2'>{price}</button>
                                    <label htmlFor="">/sqft</label>
                                </div>
                            <span>{type}</span>
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RecentCard