import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const InputPassword = styled.input`
    display:block;
    width:100%;
    border:none;
    padding-bottom:${theme.spaceScale.scale[0]};
    border-bottom:solid 1px ${theme.colors.black[3]};
    &:focus{
        outline: none
    }

    ${props => props.large ? `
    margin-bottom:${theme.spaceScale.scale[1]};
    ` : `` }

    ${props => props.small ? `
    margin-bottom:${theme.spaceScale.scale[0]};
    ` : `` }
`

export default InputPassword