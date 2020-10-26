import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const InputTxt = styled.input`
    display:block;
    border:none;
    padding:${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
    border-bottom:solid 2px ${theme.colors.black[2]};
`

export default InputTxt