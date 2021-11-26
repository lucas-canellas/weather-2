import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: local(''),
       url('../public/fonts/raleway-v22-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */

}
/* raleway-regular - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../public/fonts/raleway-v22-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */

}
/* raleway-500 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('../public/fonts/raleway-v22-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */

}
/* raleway-600 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../public/fonts/raleway-v22-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */

}
/* raleway-700 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('../public/fonts/raleway-v22-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Raleway','Courier New', Courier, monospace,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
