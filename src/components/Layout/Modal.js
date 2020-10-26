import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Modal = styled.div`
    width:480px;
    background-color:${theme.misc.modalColor};
    border-radius:${theme.misc.borderRadius};
    padding: ${theme.spaceScale.scale[3]} ${theme.spaceScale.scale[3]};
    
`

export default Modal