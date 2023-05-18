import HTMLPIC from '../assets/html.png'
import SQLPIC from '../assets/sql-server.png'
import FIGMAPIC from '../assets/figma.png'
import CSSPIC from '../assets/css-3.png'
import NODEPIC from '../assets/nodejs.png'
import PHOTOSHOPPIC from '../assets/photoshop.png'
import JSPIC from '../assets/js.png'
import BOOTSTRAPPIC from '../assets/bootstrap.png'
import REACTPIC from '../assets/react.png'
const Skill = () => {
    return ( 
        <div className="skill_page position-relative container mybackground" id="myskill_page">

              <div className="mytitle myfont_family mb-4 mypadding">
                <p><span className="myorange">My </span>Skills</p>
                </div>

              <div className="skill_rating mypadding">
                <div className="html d-flex align-items-center theSkills ">
                    <div className="myprogress ">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={HTMLPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>HMTL</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sql d-flex align-items-center justify-content-center theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={SQLPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>SQL</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="figma d-flex align-items-center justify-content-end theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={FIGMAPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>Figma</p>
                            </div>
                        </div>

                        <div className="progress_bar ">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="css d-flex align-items-center theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={CSSPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>CSS</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="node d-flex align-items-center justify-content-center theSkills " >
                    <div clasclassNames="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={NODEPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>NODE</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="adobe d-flex align-items-center justify-content-end theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={PHOTOSHOPPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>Adode Photoshop</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="javascript d-flex align-items-center theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center ">
                            <div className="skill_img"> 
                                <img src={JSPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>JAVASCRIPT</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="boostrap d-flex align-items-center justify-content-center theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={BOOTSTRAPPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>BOOTSTRAP</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="react d-flex align-items-center justify-content-end theSkills ">
                    <div className="myprogress">
                        <div className="tec_name d-flex align-items-center justify-content-start">
                            <div className="skill_img">
                                <img src={REACTPIC} alt=""/>
                            </div>
                            <div className="sub_heading myfont_family">
                                <p>REACT</p>
                            </div>
                        </div>

                        <div className="progress_bar">
                            <div className="progress_bar_1">
                            </div>
                            <div className="progress_bar_2">
                            </div>
                        </div>
                    </div>
                </div>
              
              </div>

          </div>

     );
}
 
export default Skill;