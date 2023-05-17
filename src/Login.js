import {Link,useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Searching from './searching';
import { useSelector, useDispatch } from 'react-redux';
import { isadmin,isuser } from './actions';

const Login = () => {
    
    const [useremail, setUseremail]=useState("")
    const [password, setPassword]=useState("")
    const [emailMsg, setEmailMsg]=useState(false)
    const [passwordMsg, setPasswordMsg]=useState(false)
    const [wrongCredentials,setWrongCredentials]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const [searching,setSearching]=useState(false)
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const loginCheck=(e)=>{
        e.preventDefault()
        if(useremail.trim() === "" || password.trim() === ""){
        if(useremail.trim()===""){
            setErrorMsg("Email required")
         return setEmailMsg(true)   
        }
        else{
            setEmailMsg(false)
        }
        if(password.trim()===""){
            setErrorMsg("Password required")
            return setPasswordMsg(true)
        }
        else{
            setPasswordMsg(false)
        }
        }
       
        
        else{
            
                let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!useremail.match(validEmail)){
                    setErrorMsg("Email is invalid")
                 return setEmailMsg(true)   
                }
                else{
                    setEmailMsg(false) 
                }
                
                const data={email:useremail,password}
                setSearching(true)
                setWrongCredentials(false)
                fetch('https://my-brand-frontend.onrender.com/myapi/login',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(data)
                }).then((response)=>{
                    return response.json()
                }).then((data)=>{
                    setSearching(false)
                    const token=data
                     if(token){
                        console.log(data.data.isAdmin)
                       data.data.isAdmin?dispatch(isadmin()):dispatch(isuser())
                        console.log("logged in")
                        navigate('/home')
                    }
                    else{
                        setErrorMsg("Incorrect credentials!")
                        return setWrongCredentials(true)
                    }
                }).catch((error)=>{
                    setSearching(false)
                    setWrongCredentials(true)
                  console.log(error.message)
                  return setErrorMsg(error.message)
                })
        }
    
}
    return ( 
        <section className="loginPage">
            
            <div className="loginSection">
               <div className="inside">
                <div className="loginTitle">
                    <h3><span className="mycolor">L</span>ogin</h3>
                </div>
               <div className="formSection">
               <form action=""  onSubmit={loginCheck}>
                   <div className='validationError'>
                   {wrongCredentials && <Typography variant='body1' align='center'>{errorMsg}</Typography>}
                   </div>
                    <div className='myinputs'>
                        <input type="text" value ={useremail} onChange={(e)=>setUseremail(e.target.value)} placeholder="Email" />
                        <div className='validationError'>
                        {emailMsg && <Typography variant='body2'>{errorMsg}</Typography>}
                        </div>
                    </div>

                  
                    <div className='myinputs'>
                        <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                        <div className='validationError'>
                            {passwordMsg &&  <Typography variant='body2' >{errorMsg}</Typography>}
                        </div>
                    </div>
                    
                <div className="signUp">
                    <div>
                        <p>
                            <Link to='/signup'>Sign up</Link>
                        </p>
                    </div>
                    <div>
                        <p>Forgot password</p>
                    </div>
                </div>

                <div className="submitButton">
                   
                         
                         <Button type='submit' variant="contained" color='secondary'>
                           {searching? <Searching/>: `Login`}
                         </Button>
                         
                   
                </div>
                </form>
             </div>
               </div>
            </div>
        </section>
    );
}

export default Login;