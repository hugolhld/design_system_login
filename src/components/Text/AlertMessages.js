import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Alert = styled.p`
    font-family : alert;
    font-size : ${theme.fontScale.scale[0]};
    border: 2px solid #000;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom:${theme.spaceScale.scale[2]};

    ${props => props.error ? `
    color: ${theme.colors.pink[1]};
    border-color: ${theme.colors.pink[1]};
    ` : `` }
    ${props => props.warning ? `
    color: ${theme.colors.black[4]};
    border-color: ${theme.colors.black[4]};
    ` : `` }
    ${props => props.success ? `
    color: #66E2DF;
    border-color: #66E2DF;
    ` : `` }
    

`
export default Alert