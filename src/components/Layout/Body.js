import React,{useEffect} from 'react'
import theme from '../../assets/styles/theme'

function Body() {
    useEffect(()=>{
        document.body.style.backgroundColor=theme.misc.backgroundColor
    })
    return (
        <>  
        </>
    )
}

export default Body
