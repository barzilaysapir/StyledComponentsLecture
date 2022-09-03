import { useState } from "react";
import { ThemeProvider } from "styled-components";

const themes = {
    dark: {
        id: 'dark',
        primary: '#282c34',
        secondary: '#fff',
    },
    light: {
        id: 'light',
        primary: '#fff',
        secondary: '#282c34',
    }
};

const Theme = ({ children }) => {

    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme.id === 'dark' ? themes.light : themes.dark);
    }

    return (
        <ThemeProvider theme={{ ...theme, toggleTheme }}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;