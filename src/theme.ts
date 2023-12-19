import { experimental_extendTheme as extendTheme } from '@mui/material';


// declare module '@mui/material/styles' {
//   interface CssVarsThemeOptions {
//     taskk: {
//       colSpanTimeSchedule: {
//         MEMBER: number,
//         DATE: number,
//         WEEK: number,
//        },
//     }
//   }
// }

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#757ce8',
        },
        secondary: {
          main: '#eff0ff'
        },
        text: {
          primary: '#757ce8'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#002884',
        },
        secondary: {
          main: '#ba000d'
        },
        text: {
          primary: '#fff'
        }
      }
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: ({theme}) => ({
          borderRadius: '999px',
          fontWeight: 600,
          textTransform: 'capitalize',
          color: theme.palette.primary.main,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: '#ffffff',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            }
          },
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.primary.main} !important`
          }
        }),
        sizeMedium: {
          fontSize: '13px',
          padding: '4px 12px'
        }
      }
    }
  }
});

export default theme;