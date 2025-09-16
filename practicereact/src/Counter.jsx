import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const counterStyle = {
        border: '2px solid yellow',
        margin: '5px'
    }
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div style={counterStyle}>
            <h3>count : {count}</h3>
            <button onClick={handleCount}>add</button>
        </div>
    );
};

export default Counter;