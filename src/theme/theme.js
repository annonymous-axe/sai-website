import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        },
        secondary: {
            main: "#0f172a"
        },
        accent: {
            main: "#c89666"
        },
        background: {
            default: "#ffffff",
            primary: "#1a1a1a"
        },
        text: {
            primary: "#1a1a1a",
            secondary: "#555555",
            white: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h1: {fontWeight : 600},
        h3: {fontWeight : 600},
        h4: {fontWeight : 600},
        h5: {fontWeight : 600},
        body1: {fontSize: "1rem", letterSpacing: 2},
        button: {
            letterSpacing: 2
        }
    },
});

export default theme;
