import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
const Login = () => {
    return ( 
        <section className="loginPage">
            
            <div className="loginSection">
               <div className="inside">
                <div className="loginTitle">
                    <h3><span className="mycolor">L</span>ogin</h3>
                </div>
               <div className="formSection">
               <form action="">
                    <div>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Password"/>
                    </div>
                </form>
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
                   
                         <Link to='/home'>
                         <Button variant="contained" color='secondary'>
                           Submit
                         </Button>
                         </Link>
                   
                </div>
               </div>
            </div>
        </section>
    );
}
 
export default Login;