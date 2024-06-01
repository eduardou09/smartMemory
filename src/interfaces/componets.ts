export type IButton ={
    title: string;
    width?: string
    padding?: string 
}

export type IBox ={
    title: string;
    text: string;
    icon?:any
    photo?: any
    isPhoto?: boolean

}

export type IServiceBox ={
   
   // text: string;
    service:string;
    subtitleService:string;
    //stage:string;
    photo?:any
    stages:any
    widthImg?:string
}

export type IBoxGrid ={
    mainText: string;
    subText?:string;
    isLeft?:boolean
}
export type ITextArea={
    placeholder:string
}