import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Title = styled.h2`
    font-family: title-medium;
    font-size:${theme.fontScale.scale[5]};
    color:${theme.colors.black[1]}; 

    ${props => props.large ? `
    margin-bottom: ${theme.spaceScale.scale[4]};
    ` : `` }

    ${props => props.small ? `
    margin-bottom: ${theme.spaceScale.scale[3]};
    ` : `` }
`

export default Title