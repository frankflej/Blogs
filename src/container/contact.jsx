import { Button, Typography } from "@mui/material";
import { useState } from "react";
import Searching from "../searching";
import RetrieveMsg from "../retrieveMsg";

const Contact = () => {
    const [clientname,setUsername]=useState(null)
    const [clientemail,setUseremail]=useState(null)
    const [clientmessage,setUsermessage]=useState(null)
    const [searching,setSearching]=useState(false)
    const [msgstate,setMsgState]=useState(false)
    const [message,setMessage]=useState('')
    const saveComment=(e)=>{
        e.preventDefault()
        setSearching(true)
        if(clientname==="" || clientemail==="" ||clientmessage===""){
            return setMessage("Fill in all the fields")
        }
        const data={clientname,clientemail,clientmessage};
    fetch('https://my-brand-frontend.onrender.com/myapi/query',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setSearching(false)
        setMessage(data.message)
        setMsgState(true)
        setTimeout(() => {
            setMsgState(false)
        }, 3000);
        setUsername("")
        setUseremail("")
        setUsermessage("")
    })
    }


    return ( 
        <section>
            <div className="contact position-relative ">
                <div  className="d-flex justify-content-between container">
                    <div></div>
                    <div className="myTitle w-50">
                        <Typography variant="h5"> Contact Me</Typography>
                    </div>
                </div>
                <div className="d-flex justify-content-between container">
                <div className="contact_list mt-5">
                    <div className="phone_add mb-3">
                        <Typography>Phone</Typography>
                        <Typography>+250 78 53 10 691</Typography>
                    </div>
                    <div className="phone_add mb-3">
                        <Typography>Email</Typography>
                        <Typography>frankflej@gmail.com</Typography>
                    </div>
                    <div className="phone_add mb-3">
                        <Typography>Address</Typography>
                        <Typography>Kigali Rwanda</Typography>
                    </div>
                </div>
                <div className="contact-me position-relative w-50">
                    <div>
                     <form action="" className=" mt-5" onSubmit={saveComment}>
                        <div className="d-flex ">
                            <div>
                            <input type="text" name="" id="" value={clientname} onChange={e=>setUsername(e.target.value)} placeholder="Enter your name"/>
                            </div>
                            <div>
                            <input type="text" name="" id="" value={clientemail} onChange={e=>{setUseremail(e.target.value)}}  placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="5" value={clientmessage} onChange={e=>{setUsermessage(e.target.value)}}  placeholder="Enter your comments"></textarea>
                        </div>
                        <div className="myfont_family mybtn">
                        <Button type='submit' variant="contained" color='secondary'>
                        {searching? <Searching/> : `Submit` }
                    </Button>
                        </div>
                     </form>
                    </div>
                    {msgstate && <RetrieveMsg message={message}/>}
                </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Contact;