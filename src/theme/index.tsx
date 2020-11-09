import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import { palette } from "./palette";

let theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: "Poppins, Helvetica",
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiAccordionSummary: {
      content: {
        display: "block",
      },
    },
    MuiTableCell: {
      head: {
        color: palette.white,
        border: "1px solid white",
      },
      body: {
        color: palette.white,
        border: "1px solid white",
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
