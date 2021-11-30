import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Detail from './Detail';
import getData from '../services/coindata'; 
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import dictonary from '../services/dictonary';



const Chart = () => {

    const [data,setData]=useState([]);
    const [symbol,setSymbol]=useState('BTCUSD');
    const [detaildata,setDetaildata]=useState({});
    

    useEffect(()=>{

        getData().then(data =>{
            setData(data);
            setDetaildata(data[0]);
        })
        
    },[]);


    return (
        <div className="conatiner row " >

            

                        <div className="col m-3">

                        {data.map( obj => (
                            
                            <Card name={obj.name} 
                            price={obj.market_data.current_price.inr} 
                            change={obj.market_data.price_change_percentage_24h}
                            onClick={()=>{setDetaildata(obj);
                                          setSymbol(dictonary[obj.name])
                                          console.log(obj)}}
                            />
                        ))}

                        </div>

                        <div className="col ml-2">
                        <div className="chart m-3 ">
                        <TradingViewWidget 
                            symbol={symbol}
                            theme={Themes.DARK}
                            locale="in"
                            interval = 'H'
                            autosize="true"
                        /> 
                        </div>
                        <Detail data={detaildata} />
                        </div>

                        
        

        </div>
    )
}

export default Chart

