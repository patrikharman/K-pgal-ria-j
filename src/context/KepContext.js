import React, { createContext, useState } from 'react';

export const KepContext = createContext();

export const KepProvider = ({ children }) => {
    const [images] = useState([
        { src: 'feherje1.jpg',name:'Scitec Nutrition',description: 'Kiváló minőségű!' },
        { src: 'feherje2.jpg', name:'Biotech Usa',description: 'Kiváló minőségű!' },
        { src: 'feherje3.jpg', name:'Biotech Usa',description: 'Kiváló minőségű!' },
        
    ]);
    const [valasztottKep, setValasztottKep] = useState(images[0]);

    const selectImage = (image) => {
        setValasztottKep(image);
    };

    return (
        <KepContext.Provider value={{ images, valasztottKep, selectImage }}>
            {children}
        </KepContext.Provider>
    );
};