import React from 'react'
import theme from '../../assets/styles/theme'
import styled from 'styled-components'

let StyledLogo = styled.img`
    margin: ${theme.spaceScale.scale[7]} 0;
`

function Logo() {
    return (
        <StyledLogo src={theme.misc.logo} alt="Logo"></StyledLogo>
    )
}

export default Logo