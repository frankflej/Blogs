import Frank from '../assets/frank.JPG'
import { useState } from 'react';
const NavigationBar = () => {
    const [myheight,setMyHeight]=useState(0)
    function checkIfBoxReachedTop() {
        // const boxRect = document.getElementById('myNavbar')
        console.log("helllo")
        setMyHeight(this.scrollY)
        console.log(myheight)
        // if(myheight>618){
        //     document.getElementById('myNavbar').style.position("sticky")
        // }
       
      }
    //   window.addEventListener("scroll",checkIfBoxReachedTop)
    return ( 
       <section className=' w-100' onScroll={checkIfBoxReachedTop}>
         <div className="myNavbar position-relative  d-flex justify-content-between  align-items-center" id="myNavbar" >
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