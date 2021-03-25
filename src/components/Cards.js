import React, { useState } from 'react';

const Cards = ({ round, onSetRound }) => {
    const [imageCards, setImageCards] = useState([]);

    const shuffleCards = async () => {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        const data = await response.json();

        const response2 = await fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=4`);
        const data2 = await response2.json();
        setImageCards(data2.cards);

        onSetRound(round + 1)
    };

    return (
        <div>
            <div onClick={shuffleCards} className='ui button secondary'>New Cards</div>
            <div className="cards">
                {imageCards.map((card) => {
                    return (
                        <div key={card.code} className='card'>
                            <img src={card.image} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
};

export default Cards;
