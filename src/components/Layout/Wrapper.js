import styled from 'styled-components'
import theme from '../../assets/styles/theme'

const Wrapper = styled.div`
    width:100%;
    display:${props => props.input ? `flex` : `grid` };
    place-items:center;

    ${props => props.inputBorder || props.input ? `
    padding-bottom:${theme.spaceScale.scale[0]};
    ` : `` }
    
    ${props => props.inputBorder ? `
    display:flex;
    align-items:center;
    margin-bottom:${theme.spaceScale.scale[3]};
    border-bottom:solid 1px ${theme.colors.black[3]};
    ` : `` }
    
    ${props => props.inputBirthday ? `
    display:flex;
    justify-content: space-between;
    
    ` : `` }
`

export default Wrapper