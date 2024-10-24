import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Foot from './components/Foot';
import Header from './components/Header';
import Menu from './components/Pages/Menu';
import "./index.css";
import Reservation from './components/Pages/Reservation';
import Breakfast from './components/Menu/Breakfast';
import About from './components/Pages/About';


function App() {
  return (
  <div>

    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route index element={<Navbar />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    <Foot/>
  </div>
  )
}

export default App
