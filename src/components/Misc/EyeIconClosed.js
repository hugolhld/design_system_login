import React from 'react'
import theme from '../../assets/styles/theme'
import styled from 'styled-components'

let StyledIcon = styled.img`
    display:block;
    text-align: right;
`

function EyeIconClosed() {
    return (
        <StyledIcon src={theme.misc.eyeIconClosed} alt="Eye icon"></StyledIcon>
    )
}

export default EyeIconClosed
