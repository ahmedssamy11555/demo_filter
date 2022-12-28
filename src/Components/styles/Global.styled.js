import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



body{
    font-family: 'Poppins', sans-serif;
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;
    font-size: 16px;
    position:relative;
    overflow:hidden

}
 *{
    box-sizing:border-box;
    margin:0;
    padding:0
 }
 
 #sidePanel{
    transition:.5 ease-in-out
 }
    

`;

export default GlobalStyles;
