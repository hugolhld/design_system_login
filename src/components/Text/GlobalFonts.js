import React from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import theme from '../../assets/styles/theme'

export function fontFace(name, src, format){

    return `
        @font-face{
            font-family: "${name}";
            src: url(${require('../../../public/fonts/' + src + '.'+format+'')});
        }
    `
}

let fonts = ""
for (let font of theme.fonts){
    fonts+=fontFace(font.style,font.name,font.format)
}

const GlobalStyle = createGlobalStyle`
${fonts}
`
console.log(fonts)

export default GlobalStyle