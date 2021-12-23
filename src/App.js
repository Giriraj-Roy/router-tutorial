import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const App = () => {
  return (
    
      <React.Fragment>
        <Routes>          
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<ContactUs/>} />
          {/* <Route path='/'>
            <Home/>
          </Route> */}
        </Routes>
          
      </React.Fragment>
    
  )
}

export default App
