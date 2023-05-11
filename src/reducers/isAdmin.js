const isAdmin=(state="",action)=>{
    switch(action.type){
        case "Admin":
            return state=true
        case "User":
            return state=false
        default:
                return state
    }
}
export default isAdmin