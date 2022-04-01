import { Button } from 'react-bootstrap';
import './App.css';
import CardGroup from './Components/CardGroup/CardGroup';
import CardGroup2 from './Components/CardGroup2/CardGroup2';

function App() {
  return (
    <div>
       <Button variant="danger">My Button</Button>
      <CardGroup></CardGroup>
      <CardGroup2></CardGroup2>
      
    </div>
  );
}

export default App;
