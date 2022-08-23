import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  
  :focus { 
    outline: 0;
    box-shadow: 0 0 0;
  }
}

body { 
  background-color: ${(props) => props.theme["base-background"]};
  -webkit-font-smoothing: antialiased;  
}

body, input, textarea, button { 
  font-family: Nunito;
  line-height: 160%;
}

`;
