import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import HomePage from './homePage';
function App() {
  return (
    <div className='mycontainer'>
      <Router>
        <Routes>
           <Route exact path='/login' element={<Login/>}></Route> 
           <Route exact path='/signup' element={<Signup/>}></Route> 
           <Route exact path='/home' element={<Home/>}></Route>
           <Route exact path='/welcome' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
