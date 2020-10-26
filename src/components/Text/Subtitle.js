import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Subtitle = styled.h2`
    font-family:subtitle;
    font-weight:normal;
    padding: ${theme.spaceScale.scale[0]} ${theme.spaceScale.scale[0]};
    font-size:${theme.fontScale.scale[6]};
`

export default Subtitle