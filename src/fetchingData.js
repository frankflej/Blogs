import { useEffect,useState } from "react"
const useFetching=(thelink)=>{
    let [alldata,setData]=useState(null)
    let [searching,setSearching]=useState('true')
    useEffect(()=>{
        fetch(thelink)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
        setSearching(false)
        setData(data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    return {alldata,searching}
}
export default useFetching