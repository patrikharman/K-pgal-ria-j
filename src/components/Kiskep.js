import React, { useContext } from 'react';
import { ImageContext } from './ImageContext';

export const Kiskep = () => {
    const { images, selectImage } = useContext(ImageContext);

    return (
        <div className="kiskepek">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.name}
                    onClick={() => selectImage(image)}
                    className="kiskep"
                />
            ))}
        </div>
    );
};