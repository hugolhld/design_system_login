import React from 'react'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import Theme from '../../assets/styles/theme'

const Button = styled.a`
    display:grid;
    place-items:center;
    background:${props => props.primary ?  theme.colors.blue[0] : theme.colors.black[0]};
    width:150px;
    text-decoration:none;
`
export default Button