import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const lodedData = data.data.data;
                const phonesData = lodedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        price: parseInt(parts[1])
                    }
                    return ph;
                });
                setPhones(phonesData)
            })
    }, []);

    console.log(phones);

    return (

        <div>
            <div width="100%" height="100%">

                <BarChart width={800} height={400} data={phones}>
                    <Bar dataKey='price' fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                </BarChart>

            </div>

        </div>
    );
};

export default SpecialChart;