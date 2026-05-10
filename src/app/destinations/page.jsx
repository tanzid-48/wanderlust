import React from 'react';
import { getDestinationsData } from '../lib/data';
import DestinationCard from '@/components/DestinationCard';

const DestinationsPage = async() => {
    const destinations = await getDestinationsData();
    return (
        <div className='max-w-7xl mx-auto py-10'>
           <h2 className='text-3xl font-semibold'>Explore All Destinations</h2>
           <p className='text-lg text-slate-500'>Find your perfect travel experience from our curated collection</p>
           <div className="grid grid-cols-1  md:grid-cols-3 gap-5 mt-10 ">
            {
                destinations.map(destination => <DestinationCard key={destination._id} destination= {destination} ></DestinationCard>)
            }
           </div>
        </div>
    );
};

export default DestinationsPage;