import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Modal = styled.div`

    ${props => props.large ? `
        width: 500px;
        margin-bottom: ${theme.spaceScale.scale[5]};
    ` : `` }

    ${props => props.small ? `
        width: 350px;
        margin-bottom: ${theme.spaceScale.scale[4]};
    ` : `` }
`

export default Modal