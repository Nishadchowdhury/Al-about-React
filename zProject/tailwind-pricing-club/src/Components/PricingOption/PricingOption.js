import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    const { name, price , Benefits } = props.option;
    return (
        <div className="bg-white p-4 rounded-lg">
            <h2 className="text-black bg-indigo-300 p-2 rounded-lg text-xl font-bold ">{name}</h2>
            <p>
            <span className="text-4xl font-bold ">${price}</span>
            <span className="text-xl font-bold text-gray-500
            ">/month</span>
            </p>
            <div className='items-center'>
                <h3 className='text-xl font-bold text-left'>Benefits</h3>

              {
                  Benefits.map(benefit => <Benefit benifit={benefit}></Benefit>)
              }
            </div>
            <button className="bg-green-500 flex w-full justify-center py-2 rounded-lg mt-6 items-center text-white hover:font-bold">
                Buy Now
                <ArrowRightIcon className="w-4 ml-3"></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;