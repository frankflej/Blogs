import Facebook from '../assets/facebook_orange.png'
import Twitter from '../assets/twitter_orange.png'
import Instagram from '../assets/instagram_orange.png'
import Youtube from '../assets/youtube_orange.png'
import Github from '../assets/github-Orange.png'
import Design from '../assets/design.png'
import Coding from '../assets/coding.png'
import Conversation from '../assets/good-conversion-rate.png'
import { Button } from '@mui/material'

const About = () => {
    
    return ( 
        <div className="about_page position-relative mybackground" id="myabout_page">
            <div className="about_details container" >
              <div className="">
                <div className="about_title">
                    <div className="mytitle myfont_family d-lg-none d-md-block py-5 pb-2">
                        <p><span className="myorange">About</span></p>
                    </div>
                </div>
                <div className="about_space ">  

                    <div className=" a_one Namee pt-5">
                        <div class="about_sub_titles myfont_family pb-20 ">
                            <p>
                                Who am I ?
                                <hr class="my_hr"/>
                            </p>
                        </div>
                        <div className="myfont_family sub_heading">
                            <p>A Web Designer / Developer <br/> Located In Our Lovely Earth</p>
                        </div>
                        <div className="myfont_family_2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</p>
                        </div>
                        <div className=" myfont_family cv_btn">
                            <Button variant='outlined' >Download CV</Button>
                        </div>
                    </div>

                    <div className="myfont_family  pt-5 a_two ">
                        <div className="about_sub_titles myfont_family pb-2 ">
                            <p>Personal Info</p>
                            <hr className="my_hr"/>
                        </div>
                        <div>
                            <div className="pb-1">
                                <p><span><b>Birthdate:</b></span> 10/01/1770</p>
                            </div>
                            <div className="pb-1">
                                <p><span><b>Email:</b></span> frankflej@gmail.com</p>
                            </div>
                            <div className="pb-1">
                                <p><span><b>Phone:</b></span> +250 78 53 10 691</p>
                            </div>
                            <div className="pb-1">
                                <p><span><b>Skype:</b></span> Emery_frank</p>
                            </div>
                            <div className="pb-1">
                                <p><span><b>Address:</b></span>  1234 Fake ST NoWhere AB Country</p>
                            </div>
                            <div className="website_logo">
                                <ul className="d-flex align-items-center justify-content-start pt_1">
                                    <li> <img className="socialLogo_2 mx-2" src={Facebook} alt="instagram"/> </li>
                                    <li> <img className="socialLogo_2 mx-2" src={Twitter} alt=""/></li>
                                    <li> <img className="socialLogo_2 mx-2" src={Github} alt=""/></li>
                                    <li> <img className="socialLogo_2 mx-2" src={Instagram} alt=""/></li>
                                    <li> <img className="socialLogo_2 mx-2" src={Youtube} alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="myfont_family a_three  pt-5 ">
                                <div className="about_sub_titles myfont_family pb-2 ">
                                    <p>My Expertise</p>
                                    <hr className="my_hr"/>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center  pt-1 ">
                                        <div  className="pr-1">
                                            <img src={Design} alt=""/>
                                        </div>
                                        <div className="expert_border pb-10">
                                            <p>UX Design</p>
                                            <p>exercite Repellendus, corrupt.</p>
                                        </div>
                                    </div>
        
                                    <div className="d-flex align-items-center  pt_1">
                                        <div  className="pr-1">
                                            <img src={Coding} alt=""/>
                                        </div>
                                        <div className="expert_border pb-1">
                                            <p>Web Development</p>
                                            <p>exercite Repellendus, corrupt.</p>
                                        </div>
                                    </div>
        
                                    <div className="d-flex align-items-center pt-1 ">
                                        <div className="pr-1">
                                            <img src={Conversation} alt=""/>
                                        </div>
                                        <div className="expert_border pb-1">
                                            <p>Digital marketing</p>
                                            <p>exercite Repellendus, corrupt.</p>
                                        </div>
                                    </div>
                                </div>
                    </div>

                </div>
                   
              </div>

            </div>
        </div>
     );
}
 
export default About;