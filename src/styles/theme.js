import { ThemeProvider } from "styled-components";

export default function Theme({ children }) {
  const theme = {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      veryDark: "#202225",
      dark: "#2F3136",
      formDark: "#36393F",
      lightDark: "#36393F",
      lightBlue: "#01ADF1",
      blue: "#5865F2",
      darkBlue: "#4752C4",
      lightGray: "#F6F6F7",
      gray: "#b9bbbe",
      darkGray: "#5D6067",
      green: "#3BA55D",
    },
    fonts: {
      main: "'Nunito Sans', sans-serif",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
