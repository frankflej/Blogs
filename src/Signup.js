import {Link,useNavigate} from 'react-router-dom'
import { useState, } from 'react';
import { Button,Typography} from '@mui/material';
import Searching from './searching';
const Signup = () => {
    const navigate = useNavigate();
    const [userName,setUsername]=useState("")
    const [userEmail,setUseremail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setConfirmPassword]=useState("")
    const [searching,setSearching]=useState(false)
    const [checkError,setCheckError]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const myinputs=[userName,userEmail,password,cpassword]

    const signUp =(e)=>{
        e.preventDefault()
        // CHECKING IF ALL INPUTS ARE FILLED
       const checkInput=myinputs.filter((one)=>{
        return one === ""
       })
       if(checkInput.length !== 0){
        console.log(checkInput)
        setErrorMsg("All fields required!")
        return setCheckError(true)
       }
       else{
        setCheckError(false)
       }

       //CHECKING IF THE PROVIDED EMAIL IS VALID
       let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(!userEmail.match(validEmail)){
           setErrorMsg("Email is invalid!")
        return setCheckError(true)  
       }

       //CHECKING IF PASSWORD PROVIDED MATCH
       if(password !== cpassword){
        setErrorMsg("Password don't match!")
        return setCheckError(true)  
       }else{
        const data={username:userName,email:userEmail,password,cpassword};
        setSearching(true)
        fetch('https://my-brand-frontend.onrender.com/myapi/signup',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            alert(data.message)
            setSearching(false)
            navigate('/')
        }).catch((error)=>{
            setSearching(true)
            setErrorMsg(error.message)
            console.log(error)
        })
       }


       
    }
    return ( 
        <section className="loginPage">
            <div className="loginSection">
               <div className="inside">
                <div className="loginTitle">
                    <h3><span className="mycolor">Create</span>Account</h3>
                </div>
               <div className="formSection">
               <form action="" onSubmit={signUp}>
                   <div className='validationError'>
                   {checkError && <Typography variant='body1'>{errorMsg}</Typography>}
                   </div>
                    <div>
                        <input type="text" value={userName} onChange={e=>setUsername(e.target.value)} placeholder="Username"/>
                    </div>
                    <div>
                        <input type="text" value={userEmail} onChange={e=>setUseremail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div>
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <div>
                        <input type="password" value={cpassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm password"/>
                    </div>
                    <div className="submitButton">
                         <Button type='submit' variant="contained" color='secondary'>
                           {searching? <Searching/>: `Save`}
                         </Button>
                </div>
                </form>
               </div>
               
               </div>
            </div>
        </section>
    );
}
 
export default Signup;