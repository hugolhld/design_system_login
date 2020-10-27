import React from 'react'
import theme from '../../assets/styles/theme'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

let StyledLogo = styled.img`
    margin: ${theme.spaceScale.scale[7]} 0;
`

function Logo() {
    return (
        <Link to="/">
            <StyledLogo src={theme.misc.logo} alt="Logo"></StyledLogo>
        </Link>
    )
}

export default Logo