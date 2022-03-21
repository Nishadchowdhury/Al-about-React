import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import Person from './Components/Person/Person';

function App() {
 
  return (
    <div className="App">
      <Countries></Countries>
      <Person></Person>
      <Header></Header>
    </div>
  );
}


/* 
function LoadCountries(){

  const [ countries , setCountry ] = useState([]);

  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  } , [] )

  return(
    <div>
      <h1>Visiting Every Country of the world !!!</h1>
      <p>Avilable Countries: {countries.length}</p>
      {
        countries.map(country => <Country population={country.population} name={country.name.common}></Country>)
      }
    </div>
  );
}

function Country(props){
  return(
    <div>
    <h3>Name: {props.name}</h3>
    <p>population: {props.population}</p>
    
    </div>
    );
  }
  
  */
  export default App;
  