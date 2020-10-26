import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Title = styled.h2`
    font-family:title-black;
    padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
    font-size:${theme.fontScale.scale[5]};
    color:${theme.colors.black[0]};

    ${props => props.black ? `
    font-family: title-black;
    ` : `` }

    ${props => props.medium ? `
    font-family: title-medium;
    ` : `` }
`

export default Title