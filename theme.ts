import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: "green",
                },
            },
        },
    },
});
