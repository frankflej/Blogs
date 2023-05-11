 const breakWords=(myParagraph)=>{
    let myinfo=(myParagraph).split(' ')
    let info=[]
    for(let i=0 ;i<=myinfo.length;i++){
        if(i<40){
            info.push(myinfo[i])
        }
    }
    info=info.join(' ')
    return info
}
export default breakWords