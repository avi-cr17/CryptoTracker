import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Detail from './Detail';
import getData from '../services/coindata'; 
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';



const Chart = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{

        getData().then(data =>{
            setData(data);
        })
        
    },[]);


    return (
        <div className="conatiner row ">

            

                        <div className="col m-3">

                        {data.map( obj => (
                            
                            <Card name={obj.name} 
                            price={obj.market_data.current_price.inr} 
                            change={obj.market_data.price_change_percentage_24h}/>
                        ))}

                        </div>

                        <div className="col ml-2">
                        <div className="chart m-3 ">
                        <TradingViewWidget 
                            symbol="BTCUSD"
                            theme={Themes.DARK}
                            locale="in"
                            interval = 'H'
                            autosize="true"
                        /> 
                        </div>
                        <Detail />
                        </div>

                        
        

        </div>
    )
}

export default Chart

