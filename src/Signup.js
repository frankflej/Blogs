import {Link} from 'react-router-dom'

const Signup = () => {
    return ( 
        <section className="loginPage">
            <div className="loginSection">
               <div className="inside">
                <div className="loginTitle">
                    <h3><span className="mycolor">Create</span>Account</h3>
                </div>
               <div className="formSection">
               <form action="">
                    <div>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Confirm password"/>
                    </div>
                </form>
               </div>
               <div className="submitButton">
                    <button>
                    <Link to='/'>Submit</Link>
                    </button>
                </div>
               </div>
            </div>
        </section>
    );
}
 
export default Signup;