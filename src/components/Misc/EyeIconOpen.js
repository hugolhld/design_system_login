import React from 'react'
import theme from '../../assets/styles/theme'
import styled from 'styled-components'

let StyledIcon = styled.img`
    display:block;
    text-align: right;
`

function EyeIconOpen() {
    return (
        <StyledIcon src={theme.misc.eyeIconOpen} alt="Eye icon open"></StyledIcon>
    )
}

export default EyeIconOpen
