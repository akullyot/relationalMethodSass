//Import all hooks and dependencies
import { useEffect }                                        from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate}  from 'react-router-dom';
import AOS                                                  from 'aos';
// import in all Components
import Home                    from './Components/Routes/Home';
import AboutMe                 from './Components/Routes/AboutMe';
import Contact                 from './Components/Routes/Contact';
import Insurance               from './Components/Routes/Insurance';
import Services                from './Components/Routes/Services';
import Location                from './Components/Routes/Location';
import Navbar                  from './Components/Navbar';
import Footer                  from  './Components/Footer';


export default function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
        <Routes>
          <Route path='/'          element={<Home />}/>
          <Route path='/aboutme'   element={<AboutMe />}/>
          <Route path='/services'  element={<Services />}/>
          <Route path='/location'  element={<Location />}/>
          <Route path='/insurance' element={<Insurance />}/>
          <Route path='/contact'   element={<Contact />}/>
          <Route path= "*"         element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};
