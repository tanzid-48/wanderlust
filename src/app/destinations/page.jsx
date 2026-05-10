import React from 'react';
import { getDestinationsData } from '../lib/data';

const DestinationsPage = async() => {
    const destinations = await getDestinationsData();
    return (
        <div>
            <h2>This is destination all: {destinations.length}</h2>
        </div>
    );
};

export default DestinationsPage;