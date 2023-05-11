import { useEffect } from "react"
const useFetching=(thelink)=>{

    useEffect(()=>{
        fetch('https://my-brand-frontend.onrender.com/myapi/blog')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
       return data
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
   
}
export default useFetching