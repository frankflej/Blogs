import { useState,useEffect } from "react";
import Searching from "../searching";
import Allblogs from "../AllBlogs";

const Blogpage = () => {
    let [allblogs,setBlogs]=useState(null)
    let [searching,setSearching]=useState('true')

    useEffect(()=>{
        fetch('https://my-brand-frontend.onrender.com/myapi/blog')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
        setSearching(false)
        setBlogs(data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    return ( 
        <div className="container welcomeBlog position-relative pb-3">
             <div className="mytitle myfont_family mb-4 mypadding">
                <p><span className="myorange">My </span>Blogs</p>
                </div>
             {searching && <Searching/>}
            {allblogs && <Allblogs blogs={allblogs}/>}
      
        </div>
     );
}
 
export default Blogpage;