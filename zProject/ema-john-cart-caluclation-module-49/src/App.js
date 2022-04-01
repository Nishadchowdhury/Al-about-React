import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route, Link } from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Others from './components/Others/Others';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/' element={<Shop />}/>
        <Route path='/home' element={<Shop />}/>
        <Route path='/orders' element={<Others />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>

    </div>
  );
}

export default App;
