import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import { palette } from "./palette";

let theme = createMuiTheme({
  palette,
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
