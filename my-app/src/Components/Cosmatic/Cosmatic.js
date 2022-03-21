import React from 'react';

const Cosmatic = (props) => {
    console.log(props);
    const {name , price, id} = props.cosmatic;
    return (
        <div>
            <h1>Buy this:{name} </h1>
            <p>Only for: {price}$</p>
            <p>this is id: {id}</p>
        </div>
    );
};

export default Cosmatic;