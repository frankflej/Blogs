// import Allblogs from "./AllBlogs";
import About from "./container/about";
import BackgroundPage from "./container/background";
import Contact from "./container/contact";
import NavigationBar from "./container/navbar";
import Portofolio from "./container/portofolio";
import Skill from "./container/skill";
import Blogpage from "./container/blogPage";


const HomePage = () => {
   
    return (
        <div className="home_portofolio w-100 vh-100">
            <BackgroundPage/>
            <NavigationBar/>
            <About/>
            <Skill/>
            <Portofolio/>
            <Blogpage/>
            <Contact/>

        </div>
    );
}
 
export default HomePage;