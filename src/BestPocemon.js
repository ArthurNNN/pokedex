import React from 'react';

const BestPocemon = (props) => {
    // var abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
        <div>
            <p>My favourite Pokemon is Squirtle</p>
            <ul>
                {props.abilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default BestPocemon;