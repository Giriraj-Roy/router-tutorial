import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const App = () => {
  return (
    
      <>
        <Routes>          
            <Route path='/' /*component={<Home/>} / */ >
            <Home/>
            </Route>
            <Route path='/about' component={<About/>} />
            <Route path='/profile' component={<Profile/>} />
            <Route path='/contact' component={<ContactUs/>} />
          {/* <Route path='/'>
            <Home/>
          </Route> */}
        </Routes>
          
      </>
    
  )
}

export default App
