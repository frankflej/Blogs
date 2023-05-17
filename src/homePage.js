import About from "./container/about";
import BackgroundPage from "./container/background";
import NavigationBar from "./container/navbar";
import Skill from "./container/skill";


const HomePage = () => {
    return (
        <div className="home_portofolio w-100 vh-100">
            <BackgroundPage/>
            <NavigationBar/>
            <About/>
            <Skill/>
        </div>
    );
}
 
export default HomePage;