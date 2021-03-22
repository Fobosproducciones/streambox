import { createMuiTheme } from "@material-ui/core/styles";

import { grey, blue, pink, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: grey[900],
    },
    warning: {
      main: purple[800],
    },
    success: {
      main: blue[800],
    },
    info: {
      main: pink[500],
    },
    background: {
      default: grey[900],
      papper: grey[900],
    },
  },
  typography: { fontFamily: ["Blinker"] },
});
export default theme;
