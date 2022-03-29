import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Supplier A',
            Price: 4000,
            sales: 2400,
            amt: 2400,
        },
        {
            name: 'Supplier B',
            Price: 3000,
            sales: 1398,
            amt: 2210,
        },
        {
            name: 'Supplier C',
            Price: 2000,
            sales: 9800,
            amt: 2290,
        },
        {
            name: 'Supplier D',
            Price: 2780,
            sales: 3908,
            amt: 2000,
        },
        {
            name: 'Supplier E',
            Price: 1890,
            sales: 4800,
            amt: 2181,
        },
        {
            name: 'Supplier F',
            Price: 2390,
            sales: 3800,
            amt: 2500,
        },
        {
            name: 'Supplier G',
            Price: 3490,
            sales: 4300,
            amt: 2100,
        },
    ];

    

    return (
        <LineChart  width={500} height={400} data={data}>
        <Line dataKey={"Price"}></Line>
        <Line dataKey={"sales"}></Line>
        <XAxis dataKey={'name'}></XAxis>
        <Tooltip></Tooltip>
        <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineChart;