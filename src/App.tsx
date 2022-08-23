import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { IssuesProvider } from "./context/IssuesContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <IssuesProvider>
          <Header />
            <Router />
        </IssuesProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
