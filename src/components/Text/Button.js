import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Button = styled.a`
    display:block;
    width:fit-content;
    text-decoration:none;
    font-family:button;
    font-size:${theme.fontScale.scale[1]};
    text-transform:uppercase;
    color:${theme.misc.textButtonColor};
    border:solid 2px transparent;
    background:${theme.colors.blue[0]};
    border-radius:${theme.misc.borderRadius};
    padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[3]};
    margin: 0 auto;
    transition: all ${theme.misc.hoverTransitionDelay};
    margin-top : ${theme.spaceScale.scale[4]};

    @media (max-width: 550px) {
        margin-top : ${theme.spaceScale.scale[3]};
      }
    
    ${props => props.hover ? `
    &:hover{
        background:${theme.misc.textButtonColor};
        color:${theme.colors.blue[0]};
        transition: all ${theme.misc.hoverTransitionDelay};
        border:solid 2px ${theme.colors.blue[0]};
        cursor: pointer;
    }

    &:active{
        background:${theme.colors.blue[2]};
        color:${theme.colors.blue[0]};
        transition: all ${theme.misc.hoverTransitionDelay};
        border:solid 2px ${theme.colors.blue[0]};
    }
    ` : `` }

    ${props => props.eyeIconOpen ? `
        background: none;
        background-image : url(${theme.misc.eyeIconOpen});
        background-repeat: no-repeat;
        background-size: contain;
        padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
        &:hover{
            cursor: pointer;
        }
    ` : `` }
`

export default Button