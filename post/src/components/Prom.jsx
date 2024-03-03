import React, { useState } from 'react';

function Prom() {
    const [answer, setAnswer] = useState('');
    const [mood, setMood] = useState('');

    const askToProm = () => {
        const response = prompt("Hannah, will you go to prom with Micah?");
        setAnswer(response);
        if (response.toLowerCase() === 'yes') {
            setMood('Happy :P');
        } else {
            setMood('Sad :(')
        }
    };

  return (
        <div className="prom">
            <button onClick={askToProm}>Ask Hannah to Prom</button>
            <p>Hannah's answer: {answer}</p>
            <p>Micah's mood: {mood}</p>
        </div>
    );
}

export default Prom;