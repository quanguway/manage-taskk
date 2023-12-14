import { experimental_extendTheme as extendTheme } from '@mui/material';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252',
        },
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#000',
        },
      }
    },
  },
 });

export default theme;