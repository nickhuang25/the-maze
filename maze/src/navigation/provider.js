import React, { useState } from 'react';

export const Context = React.createContext();

const Provider = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState('');
    const providerValue = {
        activeLinkId,
        setActiveLinkId,
    };

    return (
        <Context.Provider value={providerValue}>{children}</Context.Provider>
    );
};

export default Provider;