import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Modal = styled.div`

    width: 500px;
    margin-bottom: ${theme.spaceScale.scale[5]};
    @media (max-width: 550px) {
        width: 350px;
        margin-bottom: ${theme.spaceScale.scale[4]};
      }
`

export default Modal