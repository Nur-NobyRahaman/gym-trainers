import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {Routes,Route} from 'react-router-dom'
import About from './component/About/About';
import Header from './component/Home/Header/Header';
import Checkin from './component/Checkin/Checkin';
import Triners from './component/Triners/Triners';
import Error from './component/Error/Error';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Required from './component/Required/Required';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/checkin' element={<Checkin></Checkin>}></Route> */}
        <Route path='/checkin/:id/:name/:details' element={<Required><Checkin></Checkin></Required>}></Route>


        <Route path='/trainers' element={<Triners></Triners>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
