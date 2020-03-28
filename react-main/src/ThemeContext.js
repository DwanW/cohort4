import React from 'react';

const themes = {
    dark: {
        text: '#00ffff',
    },
    warm: {
        text: '#bf360c',
    }
};

const ThemeContext = React.createContext(themes.dark);

export { themes, ThemeContext };