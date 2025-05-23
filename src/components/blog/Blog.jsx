import React from 'react'
import image from '../image/a1.jpg'
import Back from '../common/Back';
import RecentCard from '../home/recent/RecentCard';
import Heading from '../common/Heading';
const Blog = () => {
    return (
        <>
            <section className='blog mb-5'>
                <Back name="Blog" title="Blog Grid - Our Blogs" cover={image}/>
                <div className="container">
                    <Heading title="Recent Property Listed"/>
                    <RecentCard/>
                </div>
            </section>
        </>
    )
}

export default Blog