import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
           <Route exact path='/' element={<Login/>}></Route> 
           <Route exact path='/signup' element={<Signup/>}></Route> 
           <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
