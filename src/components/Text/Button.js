import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Button = styled.a`
    display:block;
    width:fit-content;
    text-decoration:none;
    font-family:button;
    ${props => props.primary ? `
    color:${theme.colors.black[0]};
    padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
    font-size:${theme.fontScale.scale[0]};
    ` : `
    font-size:${theme.fontScale.scale[1]};
    text-transform:uppercase;
    color:${theme.misc.textButtonColor};
    border:solid 2px transparent;
    background:${theme.colors.blue[0]};
    border-radius:${theme.misc.borderRadius};
    padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[4]};
    margin: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
    transition: all ${theme.misc.hoverTransitionDelay};
    &:hover{
        background:${theme.misc.textButtonColor};
        color:${theme.colors.blue[0]};
        transition: all ${theme.misc.hoverTransitionDelay};
        border:solid 2px ${theme.colors.blue[0]};
    }
    &:active{
        background:${theme.colors.blue[2]};
        color:${theme.colors.blue[0]};
        transition: all ${theme.misc.hoverTransitionDelay};
        border:solid 2px ${theme.colors.blue[0]};
    }
    ` }
`

export default Button