import { createMuiTheme } from 'material-ui/styles';
import { cyan } from 'material-ui/colors';
import red from 'material-ui/colors/red';

export const mcgpalette0 = {
    50: '#e0fcff',
    100: '#b3f7ff',
    200: '#80f2ff',
    300: '#4dedff',
    400: '#26e9ff',
    500: '#00e5ff',
    600: '#00e2ff',
    700: '#00deff',
    800: '#00daff',
    900: '#00d3ff',
    A100: '#ffffff',
    A200: '#f2fdff',
    A400: '#bff3ff',
    A700: '#a6edff',
    contrastDefaultColor: 'dark'
};

export const mcgpalette1 = {
    50: '#e4e5f0',
    100: '#babdd8',
    200: '#8d91bf',
    300: '#5f65a5',
    400: '#3c4491',
    500: '#1a237e',
    600: '#171f76',
    700: '#131a6b',
    800: '#0f1561',
    900: '#080c4e',
    A100: '#8387ff',
    A200: '#5056ff',
    A400: '#1d24ff',
    A700: '#030cff',
    contrastDefaultColor: 'light'
};


export const theme = createMuiTheme({
    palette: {
        primary: mcgpalette1,
        secondary: cyan,
        error: red
    }
});
