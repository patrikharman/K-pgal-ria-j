import React from 'react';
import { Fokep } from './Fokep';
import { Kiskep } from './Kiskep';
import { KepProvider } from './KepContext';
import { Jatekter } from './components/Jatekter';

export const Jatekter = () => {
    return (
        <KepProvider>
            <div className="jatekter">
                <Fokep />
                <div className="kiskepek">
                    <Kiskep />
                </div>
            </div>
        </KepProvider>
    );
};