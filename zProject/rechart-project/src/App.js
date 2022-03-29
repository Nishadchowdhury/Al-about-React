import logo from './logo.svg';
import './App.css';
import MyLineChart from './Components/MyLineChart/MyLineChart';
import SpecialChart from './Components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  
  const [flip, set] = useState(false);

  const props = useSpring({ 
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
   });


  return (
    <div className="App">

      <animated.div style={props}>I will fade in</animated.div>

      <MyLineChart></MyLineChart>
      <br /><br />
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
