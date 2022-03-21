import React from 'react';

const Country = (props) => {
    const {name, region , flags , population} = props.country;
    return (
        <div  className='product'>
            <h2>Country Name:- {name.common} </h2>
            <p>Country populations:- {population} </p>
            <span>Country populations:- {region} </span> <br /><br />
            <img width={"100px"} src={flags.svg} alt="" />
        </div>
    );
};

export default Country;