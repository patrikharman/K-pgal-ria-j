import React, { useContext } from 'react';
import { KepContext } from './KepContext';

export const Fokep = () => {
    const { valasztottKep } = useContext(KepContext);

    return (
        <div className="fokep">
            <img src={valasztottKep.src} alt={valasztottKep.name} />
            <h2>{valasztottKep.name}</h2>
            <p>{valasztottKep.description}</p>
        </div>
    );
};