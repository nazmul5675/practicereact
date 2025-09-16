import React, { useState } from 'react';

const Counters = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const countAdd = count + 1;
        return setCount(countAdd)
    }
    const handleNeg = () => {
        const countMinus = count - 1;
        return setCount(countMinus)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div>
            <div>
                <button onClick={handleAdd}>+</button>
                <p>
                    count : {count}
                </p>
                <button onClick={handleNeg}>-</button></div>
            <button onClick={handleReset}>reset</button>

            {
                count > 5 && <p>you got 5$</p>
            }
        </div>
    );
};

export default Counters;