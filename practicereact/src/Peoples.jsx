import React, { use } from 'react';

const Peoples = ({ peoplesPromise }) => {
    const peoples = use(peoplesPromise)
    return (
        <div className='card'>
            <h2>people : {peoples.length}</h2>
        </div>
    );
};

export default Peoples;