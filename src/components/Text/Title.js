import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Title = styled.h2`
    font-family : title-medium;
    font-size : ${theme.fontScale.scale[5]};
    color : ${theme.colors.black[1]}; 
    margin-bottom: ${theme.spaceScale.scale[4]};

    @media (max-width: 550px) {
        margin-bottom: ${theme.spaceScale.scale[3]};
      }
`

export default Title