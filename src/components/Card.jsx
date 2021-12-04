import React from 'react'

const Card = (props) => {
    return (
        <div className="card  row  mt-2  " onClick={props.onClick}>
            <div className="card-name text-left  h-100  d-flex align-content-center mt-3 ml-2">
            <h5 className="">{props.name}</h5>
            </div>
            <div className="text-center   h-100 card-price mt-3">
            <h5 >{'₹'+( (parseFloat(props.price)<100) ?parseFloat(props.price).toFixed(4) : props.price) }</h5>
            </div>
            <div className={`card-change  text-center h-100 mt-3 `+ ((parseFloat(props.change)>0) ? `text-success` : `text-danger`)}>
            <h6 > {parseFloat(props.change).toFixed(2)+'%'} </h6>
            </div> 
        </div>
    )
}

export default Card
