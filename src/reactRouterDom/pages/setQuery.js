import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SetQuery() {
    const { searchParam } = useParams(); // Assuming you have defined 'searchParam' in your route

    // State to hold the selected search parameter
    const [selectedParam, setSelectedParam] = useState('');

    // Handler function to update the selected parameter
    const handlerFunction = (value) => {
        setSelectedParam(value);
    }

    return (
        <div>
            <h1>Set Query</h1>
            <input
                type='radio'
                value={"Goku"}
                checked={selectedParam === "Goku"}
                onChange={() => handlerFunction("Goku")}
            />
            <label>Goku</label>
            <input
                type='radio'
                value={"Picolo"}
                checked={selectedParam === "Picolo"}
                onChange={() => handlerFunction("Picolo")}
            />
            <label>Picolo</label>
            <input
                type='radio'
                value={"Pikachu"}
                checked={selectedParam === "Pikachu"}
                onChange={() => handlerFunction("Pikachu")}
            />
            <label>Pikachu</label>
            <input
                type='radio'
                value={"Ash"}
                checked={selectedParam === "Ash"}
                onChange={() => handlerFunction("Ash")}
            />
            <label>Ash</label>
        </div>
    );
}
