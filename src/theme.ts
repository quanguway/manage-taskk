import Opacity from '@mui/icons-material/Opacity';
import { CssVarsTheme, Theme, experimental_extendTheme as extendTheme } from '@mui/material';

export type ThemeTypeMUI = Omit<Theme, 'palette'> & CssVarsTheme;
declare module '@mui/material/styles' {
  // declare Css Var root
  interface CssVarsThemeOptions {
    taskk: {
      colSpanTimeSchedule: {
        INFO: number,
        DATE: number,
        WEEK: number,
      },
      timelineSchedule: {
        HEIGH_HEADER: string
      },
      colors: {
        border: {
          gray: string
        },
        tag: {
          gray: string
        }
      }
    }
  }
  interface CssVarsTheme {
    taskk: {
      colSpanTimeSchedule: {
        INFO: number,
        DATE: number,
        WEEK: number,
       },
      timelineSchedule: {
        HEIGH_HEADER: string
      },
      colors: {
        border: {
          gray: string
        },
        tag: {
          gray: string
        }
      }
    }
  }

  // // declare palette color
  // interface Palette {
  //   colors: {
  //     gray: {
  //       light: string
  //     }
  //   }
  // }
  // interface PaletteOptions {
  //   colors: {
  //     gray: {
  //       light: string
  //     }
  //   }
  // }
}

const theme = extendTheme({
  taskk:{
    colSpanTimeSchedule: {
      INFO: 9,
      DATE: 1,
      WEEK: 7,
    },
    timelineSchedule: {
      HEIGH_HEADER: '44px'
    },
    colors: {
      border: {
        gray: '#e8e9f0'
      },
      tag: {
        gray: '#e8e9f0'
      }
    }
  },
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
          primary: '#000'
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
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          color: '#3c4260',
          opacity: 1
        },
        tooltip: {
          color: '#fff',
          opacity: 1
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({theme}) => ({
          backgroundColor: theme.taskk.colors.tag.gray,
          // color: '#fff'
        })
      }
    }
  }
});

export default theme;