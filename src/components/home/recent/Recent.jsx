import React from 'react';
import './recent.css'
import Heading from '../../../components/common/Heading'
import RecentCard from './RecentCard';
const Recent = () => {
    return (
        <div className="recent mt-4">
            <div className="container">
                <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
            <RecentCard/>
            </div>
        </div>
    );
};

export default Recent;