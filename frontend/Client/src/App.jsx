import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { Registerpage } from './pages/Registerpage.jsx';
import { Loginpage } from './pages/Loginpage.jsx';
import { Factoryinfo } from './pages/Factoryinfo.jsx';
import { Displayinfo } from './pages/Displayinfo.jsx';
import { Updateinfo } from './pages/Updateinfo.jsx';
import { Services } from './pages/Services.jsx';
import { Contact } from './pages/Contact.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Factoryinfo" element={<Factoryinfo />} />
        <Route path="/Allinfo" element={<Displayinfo/>} />
        <Route path="/Updateinfo/:id" element={<Updateinfo/>} />
        <Route path="/Services" element ={<Services/>} />
        <Route path="/Contact" element ={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
