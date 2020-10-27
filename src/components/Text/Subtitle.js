import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Subtitle = styled.h2`
    font-family : subtitle;
    font-size : ${theme.fontScale.scale[3]};
    color : ${theme.colors.black[1]}; 
    margin-top : ${theme.spaceScale.scale[5]};
    margin-bottom : ${theme.spaceScale.scale[4]};

    @media (max-width: 550px) {
        margin-bottom : ${theme.spaceScale.scale[3]};
      }

`

export default Subtitle