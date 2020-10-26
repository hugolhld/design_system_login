import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const ComonText = styled.p`
    font-family : comonText;
    font-size : ${theme.fontScale.scale[1]};

    ${props => props.large ? `
    margin-bottom : ${theme.spaceScale.scale[3]};
    ` : `` }

    ${props => props.small ? `
    margin-bottom : ${theme.spaceScale.scale[2]};
    ` : `` }

`

export default ComonText