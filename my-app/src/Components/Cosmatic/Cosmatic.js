import React from 'react';
import { addToDB , removeFormDB } from '../utilities/fakedb';
import './Cosmatic.css';

const Cosmatic = (props) => {
    const {name , price, id} = props.cosmatic;

    const addToCart = (id) =>{
        addToDB(id)
    }

    const removeFormCart =id =>{
        removeFormDB(id)
    }

    return (
        <div className='product' >
            <h1>Buy this:{name} </h1>
            <p>Only for: {price}$</p>
            <p>this is id: {id}</p>
            <button onClick={ () =>{ addToCart(id)} } >add To cart</button>
            <button onClick={ () =>{ removeFormCart(id)} } >remove To cart</button>
        </div>
    );
};

export default Cosmatic;