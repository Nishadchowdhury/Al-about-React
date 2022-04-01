import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: "000",
            Benefits:
            [
                'lifetime Free',
                'Unlimited deals',
                'locaLized deals',
                'fantastic deals',
                'Crazy Deals'
            ]
        },

        { id: 2, name: 'Regular', price: 299,
        Benefits:
        [
            'Everything On Free',
            'Unlimited deals',
            'locaLized deals',
            'fantastic deals',
            'Crazy Deals'
        ] },

        { id: 3, name: 'Premium', price: 499,
        Benefits:
        [
            'Everything regular',
            'Unlimited deals',
            'locaLized deals',
            'fantastic deals',
            'Crazy Deals'
        ] }

    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4 font-mono  '>


            <h1>Beat Deals of The Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dignissimos autem ullam possimus rerum mollitia sequi dicta rem exercitationem.</p>

            <div className="grid md:grid-cols-3 gap-3 mt-8 ">

                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;