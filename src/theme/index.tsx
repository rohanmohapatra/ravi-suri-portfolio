import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { palette } from "./palette";

let breakpoints = createBreakpoints({});

let theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: "Poppins, Helvetica",
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        backgroundColor: palette.primary.main,
        color: palette.white,
      },
    },
    MuiAccordionSummary: {
      content: {
        display: "block",
      },
    },
    MuiTableCell: {
      head: {
        color: palette.white,
        border: "1px solid white",
        [breakpoints.down("xs")]: {
          fontSize: 20,
        },
      },
      body: {
        color: palette.white,
        border: "1px solid white",
        [breakpoints.down("xs")]: {
          fontSize: 20,
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
