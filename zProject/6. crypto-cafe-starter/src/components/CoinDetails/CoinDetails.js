import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {

    const { id } = useParams();

    const [coin, setCoin] = useState({});

    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                setLoading(false)
            })
    }, [id])

    console.log(coin);
    return (
        <>
            {loading ? (<Spinner />) :

                (<div className='px-4 h-[90vh] pt-20 mx-auto max-w-7xl md:px-2'>
                    <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 content-center'>

                        <div className='order-2 md:order-1'>
                            <div><h1 className="text-3xl "> Genaral Info:</h1>
                                <hr />
                                <h1>coin Nmae: {coin.name}</h1>
                                <h1>coin Market Cap: {coin.market_cap_rank}</h1>
                                <h1>Origin: {coin.country_origin ? coin.country_origin : 'Not Found'}</h1>
                            </div>

                            <div><h1 className="text-3xl ">  Sourse :</h1>
                                <hr />
                                <h1>Community Score: {coin.community_score}</h1>
                                <h1>Developer Score: {coin.developer_score}</h1>
                            </div>
                        </div>

                        <div className=' order-1 md:order-2 flex justify-center items-center'>
                            <img src={coin?.image?.large} alt="" />
                        </div>


                    </div>
                </div>)


            }
        </>
    );
};

export default CoinDetails;