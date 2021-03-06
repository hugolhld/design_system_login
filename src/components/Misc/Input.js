import React from 'react'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import Wrapper from '../Layout/Wrapper'
import Button from '../Text/Button'

let StyledInput = styled.input`
    display:block;
    width:100%;
    border:none;
    font-family: "input";
    margin-bottom:${theme.spaceScale.scale[3]};
    &:focus{
        outline: none
    }
    
    @media (max-width: 550px) {
        margin-bottom:${theme.spaceScale.scale[2]};
    }
`

function Input(props) 
{
    let scoreEye = 0
    function changeEye(e) 
    {
        scoreEye += 1
        if(scoreEye % 2 == 0)
        {
            e.target.style.backgroundImage = `url(${theme.misc.eyeIconOpen})`
            console.log(e.target.parentNode.firstElementChild);
            e.target.parentNode.firstElementChild.setAttribute("type", "password")
        }
        else
        {
            e.target.style.backgroundImage = `url(${theme.misc.eyeIconClosed})`
            e.target.parentNode.firstElementChild.setAttribute("type", "none")
        }
    }

    if(props.type == "password")
    {
        return (
            <Wrapper input>
                <Wrapper inputBorder>
                    <StyledInput placeholder={`${props.placeholder}`} type={`${props.type}`}/>
                    <Button eyeIconOpen onClick={changeEye}/>
                </Wrapper>
            </Wrapper>
        )
    }
    else
    {
        return (
            <Wrapper input>
                <Wrapper inputBorder>
                    <StyledInput placeholder={`${props.placeholder}`} type={`${props.type}`}/>
                </Wrapper>
            </Wrapper>
        )
    }

}

export default Input