import React from 'react'
import { Route, Routes } from 'react-router';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress  from "./components/Contact/BdAddress";
import UsAddress  from "./components/Contact/UsAddress";
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/coins' element={<Coins/>}>  </Route>
        <Route path='/coins-details/:id' element={<CoinDetails/>}>  </Route>

        {/* nested router */}
        <Route path='/contact' element={<Contact/>}>

        <Route path="bd-address" element={<BdAddress/>} >  </Route>
        <Route path="us-address" element={<UsAddress/>} >  </Route>
        
        </Route>

        <Route path='/about' element={<About/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
        


      </Routes>
      <Footer/>
    </div>
  )
}

export default App;