import {createTheme} from "@mui/material/styles";
import {theme} from "./theme";
import {typography} from "./typography";

const muiTheme = createTheme({
  ...theme,
  typography: {
    ...typography,
  },
});

export default muiTheme;
