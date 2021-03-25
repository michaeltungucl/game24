import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ players, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedPlayers = players.map((player) => {
        if (player.value === selected.value) {
            return null; // in react, null renders nothing
        }
        return (
            <div
                key={player.value}
                className='item'
                onClick={() => onSelectedChange(player)}
            >
                {player.label}
            </div>
        )
    });

    return (
        <div className='ui form' ref={ref}>
            <div className="field">
                <label className="label">Number of Players</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedPlayers}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
