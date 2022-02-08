import { createGlobalStyle } from "styled-components";
import { colors } from "./color";

const GlobalStyle = createGlobalStyle`

    *{
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${colors.whiteLight2};
        font-family:'Roboto', sans-serif;
    }

    *::-webkit-scrollbar {
  width: 5px;
}

/* Track */
*::-webkit-scrollbar-track {
  background:  ${colors.white}; 
  /* background:  ${colors.darkBlue_3};  */
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background:  ${colors.lightBlue}; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background:  ${colors.lightBlue}; 
}
`;
export default GlobalStyle