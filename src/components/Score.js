import React, { useState } from 'react'

const Score = ({ player }) => {
    const [currentScore, setCurrentScore] = useState(0);

    const decrement = () => {
        setCurrentScore(currentScore - 1);
    };

    const increment = () => {
        setCurrentScore(currentScore + 1);
    };

    return (
        <div className='players-score'>
            <h4>Player {player}</h4>
            <div className='score1'>
                <button className='button1' onClick={decrement}>-</button>
                <h3>{currentScore}</h3>
                <button className='button1' onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Score;
