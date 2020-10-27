import logo from "../images/logo.svg"
import eyeIconClosed from "../images/closed_eye.svg"
import eyeIconOpen from "../images/open_eye.svg"

const theme = {
    colors:{
        black:[
            "#000000",
            "#333333",
            "#5C5C5C",
            "#999999",
            "#B7B7B7"
        ],
        blue:[
            "#00CEC9",
            "#66E2DF",
            "#CCF5F4"
        ],
        pink:[
            "#FAB1A0",
            "#FCD0C6",
            "#FEEFEC"
        ]
    },
    fonts:[
        {
            style:"comonText",
            name:"NotoSans-Regular",
            format:"ttf"
        },{
            style:"title-medium",
            name:"Lato-Medium",
            format:"ttf"
        },{
            style:"subtitle",
            name:"NotoSans-Regular",
            format:"ttf"
        },
        {
            style:"input",
            name:"NotoSans-Regular",
            format:"ttf"
        },
        {
            style:"button",
            name:"NotoSans-Regular",
            format:"ttf"
        },
        {
            style:"link",
            name:"NotoSans-Regular",
            format:"ttf"
        },
    ],
    fontScale:{
        base:2,
        start:12,
        scale:[]
    },
    spaceScale:{
        base:8,
        start:8,
        scale:[]
    },
    lineHeightScale:{
        base:0.1,
        start:1.1,
        scale:[]
    },
    misc:{
        logo:logo,
        eyeIconClosed:eyeIconClosed,
        eyeIconOpen:eyeIconOpen,
        borderRadius:"10px",
        backgroundColor:"#F2F2F2",
        modalColor:'#FFFFFF',
        textButtonColor:"#ffffff",
        hoverTransitionDelay:"0.2s"
    }
}

let scaleIterator = theme.fontScale.start
for(let i = 0; i < 10; i++){
    theme.fontScale.scale.push(scaleIterator+"px")
    scaleIterator+=theme.fontScale.base
}

scaleIterator = theme.spaceScale.start
for(let i = 0; i < 10; i++){
    theme.spaceScale.scale.push(scaleIterator+"px")
    scaleIterator+=theme.spaceScale.base
}

scaleIterator = theme.lineHeightScale.start
for(let i = 0; i < 10; i++){
    theme.lineHeightScale.scale.push(scaleIterator)
    scaleIterator+=theme.lineHeightScale.base
}


export default theme