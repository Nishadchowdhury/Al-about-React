import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';
import { getTotal } from '../utilities/fakedb';





const Cosmetics = () => {
    const [cosmatics , setCosmatics] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data));
    }, []);
    
    const total = getTotal(cosmatics);
    
    return (
        <div >
            <h1>wellCome 'to My Cosmatics Store</h1>
            <p>money need:- {total}</p>
        {
            cosmatics.map(cosmatic => <Cosmatic 
                key={cosmatic.id} 
                cosmatic={cosmatic}
                ></Cosmatic>)
        }

        </div>

    );
};

export default Cosmetics;