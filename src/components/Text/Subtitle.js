import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Subtitle = styled.h2`
    font-family : subtitle;
    font-size : ${theme.fontScale.scale[3]};
    color : ${theme.colors.black[1]}; 
    margin-top : ${theme.spaceScale.scale[5]};

    ${props => props.large ? `
        margin-bottom : ${theme.spaceScale.scale[4]};
    ` : `` }

    ${props => props.small ? `
        margin-bottom : ${theme.spaceScale.scale[3]};
    ` : `` }

`

export default Subtitle