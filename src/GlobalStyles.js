import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }
  html{
    font-family: 'Baloo Chettan 2';
  }
  html, body {
    height: 100vh;
    width: 100vw;
  }
  .controls-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 12%;
    width: 100%;
    padding: 0 0;
    background: #e0e0ee;
    box-shadow: 0px 8px 30px 5px rgba(77, 77, 77,0.69);
  }
  #stroke {
    width: fit-content;
    height: auto;
    position: absolute;
    top: 1.5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #stroke-size-btn-container,
  #swatch-container-local{
    /* width: 45%; */
    width: 45%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
  #speed-dial-container {
    position: fixed;
    bottom: 2%;
    right: 5%;
  }
  #clear-favs-btn {
    position: fixed;
    bottom: 2.25%;
    right: 1%;
  }
  input[type="color" i]::-webkit-color-swatch {
    border: none;
    height: 2.5rem;
    width: 3rem;
    align-self: center;
    border-radius: 30%;
  }
`;

export default GlobalStyles;
