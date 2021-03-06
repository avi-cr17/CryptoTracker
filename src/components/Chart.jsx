import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Detail from './Detail';
import getData from '../services/coindata'; 
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import dictonary from '../services/dictonary';
import _ from 'lodash';



const Chart = () => {

    const [data,setData]=useState([]);
    const [symbol,setSymbol]=useState('BTCUSD');
    const [detaildata,setDetaildata]=useState({});
    

    useEffect(()=>{

        console.log('load');
        getData().then(data => {
            setData(data);
            setDetaildata(data[0]);
        });
        setInterval( ()=>{
            console.log('load');
        getData().then(data =>{
            setData(data);
        })
    },10000);
        
    },[]);


    return (
        <div className=" row w-100 h-100" >

            

                        <div className="col-3 ml-4  mt-2 mr-3 w-100">

                        {data.map( obj => (
                            
                            <Card

                            className="w-100" 
                            name={obj.name} 
                            price={obj.market_data.current_price.inr} 
                            change={obj.market_data.price_change_percentage_24h}
                            onClick={()=>{setDetaildata(obj);
                                          setSymbol(dictonary[obj.name])
                                          console.log(obj)}}
                            />



                        ))}

                        </div>

                        <div className="col-8 right h-100 ">
                        <div className="chart mt-3 ">
                        <TradingViewWidget 
                            symbol={symbol}
                            theme={Themes.DARK}
                            locale="in"
                            interval = 'H'
                            autosize="true"
                            timezone="Asia/Kolkata"
                            container_id= "tradingview_22ae3"
                            hide_side_toolbar= {false}
                            allow_symbol_change= {true}
                            container_id ="tradingview_0a70a"
                        /> 
                        </div>
                        <Detail data={detaildata} />
                        </div>

                        
        

        </div>
    )
}

export default Chart

