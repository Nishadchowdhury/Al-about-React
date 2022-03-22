import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import { deleteShoppingcart } from './Components/utilities/fakedb';


function App() {

  return (
    <div className="App">
      <button onClick={deleteShoppingcart} >Delete all data of localStorage</button>
      <Cosmetics></Cosmetics>
    </div>
  );
}



export default App;
