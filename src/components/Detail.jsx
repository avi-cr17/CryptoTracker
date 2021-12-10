import React from 'react';
import { useEffect,useState } from 'react';

const Detail = ({data}) => {

    const [img,setImg]=useState('');
    const [price,setPrice]=useState('');
    const [change,setChange]=useState('');

    const [weekchange,setWeekchange]=useState('');
    const [monthchange,setMonthchange]=useState('');
    const [dayhigh,setDayhigh]=useState('');
    const [daylow,setDaylow]=useState('');
    
    useEffect( ()=>{
        console.log(data);  
        details();
    },[data])

    const details=()=>{
        if(data.image!=null)
        setImg(data.image.large);

        if(data.market_data!=null){
        let price = data.market_data.current_price.inr;
        let high =data.market_data.high_24h.inr;
        let low =data.market_data.low_24h.inr;
        setPrice('₹'+((price<100) ? parseFloat(price).toFixed(4):price));
        setChange(parseFloat(data.market_data.price_change_percentage_24h).toFixed(2)+'%')
        setDayhigh('24 hour high : ₹'+((high<100)?parseFloat(high).toFixed(4):high));
        setDaylow('24 hour low : ₹'+((low<100)?parseFloat(low).toFixed(4):low));
        setWeekchange('7 day change : '+parseFloat(data.market_data.price_change_percentage_7d).toFixed(2)+'%');
        setMonthchange('30 day change : '+parseFloat(data.market_data.price_change_percentage_30d).toFixed(2)+'%');
        }
    }

    return (

        <div className="detail mt-3 mb-3 mr-3 ml-2 row">
            <div className='col-lg-4 conatiner  mt-2 text-center col-md-2 col-sm-1 '>
                <h1 className='h-25 detail-name mb-4'>{data.name}</h1>
                <div  className='d-flex h-25 justify-content-center'>
                <img src={img} className='img-detail'/>
                </div>
            </div>
        
            <div className='col-lg-7 conatiner ml-5 mt-3 text-center h-100 col-md-1 col-sm-3'>
                <div className="h-25 d-flex justify-content-between align-items-center ">
                    <p className="price">{price}</p>
                    <h1 className={"change "+ ((parseFloat(change)>0)? "success":"danger")}> {change}</h1>
                </div>
                <div className="row h-75 "> 
                <div className="d-flex justify-content-between align-items-end h-50 w-100">
                    <h5 className="">{dayhigh}</h5>
                    <h5 className="">{weekchange}</h5>
                </div>
                <div className="h-75 d-flex justify-content-between align-items-start h-25 w-100">
                    <h5 className="">{daylow}</h5>
                    <h5 className="">{monthchange}</h5>
                </div>
                </div>
               
            </div>

        </div>
    )
}

export default Detail
