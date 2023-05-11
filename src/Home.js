import { useEffect,useState } from "react";
import Allblogs from "./AllBlogs";
import {Link} from 'react-router-dom'
import Searching from "./searching";
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Home = () => {
    let [allblogs,setBlogs]=useState(null)
    let [searching,setSearching]=useState('true')

    const deleteBtn=(blogId)=>{
        const newBlogs=allblogs.filter((s,index)=>{
            return  index !== blogId
        })
        setSearching(newBlogs)
    }

    const myToggle=(mid,classname)=>{
        document.getElementById(mid).classList.toggle(classname)
        }

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
        <section className="home">
                <div className="homeHeader">
                   <div>
                    <Typography variant="h4">Post</Typography>
                   </div>

                   <div>
                        <div onClick={()=>myToggle("changePro","changeProfile")}>
                        <AccountCircleIcon fontSize="large" />
                        </div>
                   </div>
                   <div id="changePro" className="logOut changeProfile">
                    <ul>
                        <li>Change profile</li>
                        <li>
                            <Link to='/'>Log out</Link>
                        </li>
                    </ul>
                    </div>
                </div>
             
                <div>
                {searching && <Searching/>}
                {allblogs && <Allblogs blogs={allblogs} deleteBtn={deleteBtn}/>}
                </div>
               
        </section>
     );
}
 
export default Home ;