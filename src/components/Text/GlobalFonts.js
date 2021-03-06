import {createGlobalStyle} from 'styled-components'
import theme from '../../assets/styles/theme'

let fonts = ""
for (let font of theme.fonts){
    fonts+=`
        @font-face{
            font-family: "${font.style}";
            src: url(${require('../../../public/fonts/' + font.name + '.'+font.format+'')});
        }
    `
}
const GlobalStyle = createGlobalStyle`${fonts}`
// console.log(fonts)
export default GlobalStyle