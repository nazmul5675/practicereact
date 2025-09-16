import { useState } from "react";

const Batsman = () => {
    const [score, setScore] = useState(0);
    const [sixes, setSixes] = useState(0)
    const handleSingle = () => {
        const setNewScore = score + 1;
        setScore(setNewScore);
    }
    const handleFour = () => {
        const setNewScore = score + 4;
        setScore(setNewScore)
    }
    const handleSix = () => {
        const setNewScore = score + 6;
        setScore(setNewScore)
        const UpdatedSixes = sixes + 1;
        setSixes(UpdatedSixes)
    }
    return (
        <div>
            <h3> Player : Bangla Batsman</h3>
            <p><small>six : {sixes}</small></p>
            {
                score > 50 && <p>Your Score : 50</p>
            }
            <h1>score :  {score} </h1>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    );
};

export default Batsman;