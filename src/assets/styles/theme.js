const theme = {
    colors:{
        black:[
            "#000000",
            "#5C5C5C",
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
        borderRadius:"10px",
        backgroundColor:"#ffffff"
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

console.log(theme)

export default theme