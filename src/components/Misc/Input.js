import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Input = styled.input`
    display:block;
    width:100%;
    border:none;
    padding-bottom:${theme.spaceScale.scale[0]};
    border-bottom:solid 1px ${theme.colors.black[3]};

    &:focus{
        outline: none
    }

    ${props => props.password ? `
    margin-bottom:${theme.spaceScale.scale[1]};
    ` : `` }

    ${props => props.large ? `
    margin-bottom:${theme.spaceScale.scale[3]};
    ` : `` }

    ${props => props.small ? `
    margin-bottom:${theme.spaceScale.scale[2]};
    ` : `` }
`

export default Input