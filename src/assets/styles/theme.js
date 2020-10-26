import logo from "../images/logo.svg"

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
            style:"title",
            name:"Lato-Black",
            format:"ttf"
        },{
            style:"subtitle",
            name:"Lato-Regular",
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
        start:14,
        scale:[]
    },
    spaceScale:{
        base:8,
        start:8,
        scale:[]
    },
    misc:{
        logo:logo,
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


export default theme