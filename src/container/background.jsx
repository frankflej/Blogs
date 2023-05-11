import backgroundPicture from '../assets/background_center.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
import { Typography } from '@mui/material'
const BackgroundPage = () => {
    return ( 
        <div className="backgroundPage position-relative">
            <div className='mypicBackground w-100  position-fixed'>
            <img  src={backgroundPicture} alt="" />
            </div>
            <div className='d-flex align-center container pt-2'> 
                <div className="socialLogo mx-2">
                <img src={Github} alt="" />
                </div>
                <div className="socialLogo mx-2">
                <img src={Twitter} alt="" />
                </div>
                <div className="socialLogo mx-2">
                  <img src={Instagram} alt="" />
                </div>
                <div className="socialLogo mx-2">
                    <img src={Youtube} alt="" />
                </div>
              
            </div>
            <div className='position-absolute text-center w-100 mynames'>
                <div className='my-4 mywhite myfont_family'>
                <Typography variant='h3' >
                I am Emery <span className='myorange'>Frank</span>
                </Typography>
                </div>
                <div className='my-4 mywhite'>
                    <Typography>
                        <u>I'M A CREATIVE WEB DESIGNER</u>
                    </Typography>
                </div>
                <div className='my-4 mywhite'>
                <Typography>
                     I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.
                </Typography>
                </div>
            </div>
        </div>
     );
}
 
export default BackgroundPage;