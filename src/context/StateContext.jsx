// src/context/StateContext.jsx
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [promotionText, setPromotionText] = useState("");

    return (
        <StateContext.Provider value={{ selectedValue, setSelectedValue, promotionText, setPromotionText }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
