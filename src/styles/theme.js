import { ThemeProvider } from "styled-components";

export default function Theme({ children }) {
  const theme = {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      veryDark: "#202225",
      dark: "#2F3136",
      lightDark: "#36393F",
    },
    fonts: {
      main: "'Nunito Sans', sans-serif",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
