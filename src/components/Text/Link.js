import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Link = styled.a`
    display:block;
    text-align: right;
    text-decoration : none;
    font-family : link;
    color : ${theme.colors.black[1]};
    font-size : ${theme.fontScale.scale[0]};
    margin-bottom : 34 px;
    width : 500px;
    margin-bottom : ${theme.spaceScale.scale[4]};

    @media (max-width: 550px) {
        width : 350px;
        margin-bottom : ${theme.spaceScale.scale[3]};
      }
`

export default Link