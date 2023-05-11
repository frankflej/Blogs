import { Typography } from "@mui/material";
import project1 from '../assets/web-1.jpg'
import project2 from '../assets/branding-1.jpg'
import project3 from '../assets/coffee1.jpg'
import project4 from '../assets/branding-2.jpg'
import project5 from '../assets/branding-3.jpg'
import project6 from '../assets/web-3.jpg'
import project7 from '../assets/branding-5.jpg'
import project8 from '../assets/blog3.jpg'

const Portofolio = () => {
    return ( 
        <section className="position-relative container portofolio_page portofolio">
          <div className="mytitle myfont_family mb-4 mypadding">
                <p><span className="myorange">My </span>Portofolio</p>
                </div>
            <div className="myProjectGrid">
                <div className="side_1_Project">
                    <div className="projects project_1_one">
                        <img src={project1} alt="" />
                    </div>
                    <div className="projects project_1_two">
                    <img src={project2} alt="" />
                    </div>
                </div>

                <div className="side_2_Project">
                        <div className="projects project_2_one">
                        <img src={project3} alt="" />
                        </div>
                        <div className="projects project_2_two">
                        <img src={project4} alt="" />
                        </div>
                        <div className="projects project_2_three">
                        <img src={project5} alt="" />
                        </div>
                </div>

                <div className="side_3_Project">
                    <div className="projects project_3_one">
                    <img src={project6} alt="" />
                    </div>
                    <div className="projects project_3_two">
                    <img src={project7} alt="" />
                    </div>
                    <div className="projects project_3_three">
                    <img src={project8} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Portofolio;