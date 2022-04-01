import React from 'react';

const Card = ({data}) => {
    const {name , price } = data;
    return (
        <div  className="card">
        <img src="..."  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    );
};

export default Card;