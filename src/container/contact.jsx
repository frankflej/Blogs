import { Button, Typography } from "@mui/material";

const Contact = () => {
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
                <div className="contact-me w-50">
                    <div>
                     <form action="" className=" mt-5">
                        <div className="d-flex ">
                            <div>
                            <input type="text" name="" id="" placeholder="Enter your name"/>
                            </div>
                            <div>
                            <input type="text" name="" id="" placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="5"  placeholder="Enter your comments"></textarea>
                        </div>
                        <div className="myfont_family mybtn">
                        <Button variant="contained">Message me</Button>
                        </div>
                     </form>
                    </div>
                </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Contact;