
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adduser from './user/Adduser';
import Viewuser from './user/viewuser';
import Edituser from './user/Edituser';

function App() {

  return (
    < div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<Adduser/>}/>
            <Route path='/viewuser/:id' element={<Viewuser/>}/>
            <Route path='/edituser/:id' element={<Edituser/>}/>
        </Routes>
      <Navbar/>
      
      </BrowserRouter>
   
    </div>
  )
}

export default App
