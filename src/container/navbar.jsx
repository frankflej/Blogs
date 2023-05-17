import Frank from '../assets/frank.JPG'
const NavigationBar = () => {
    return ( 
       <section className=' w-100'>
         <div className="myNavbar position-relative  d-flex justify-content-between  align-items-center" >
            <ul className=' d-flex w-25 justify-content-between ' >
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
            </ul>
            <ul className=' d-flex w-25  justify-content-between '>
                <li>Portofolio</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className='position-absolute  profile_login'>
                <img src={Frank} alt=""/>
            </div>
        </div>
       </section>
    );
}
 
export default NavigationBar;