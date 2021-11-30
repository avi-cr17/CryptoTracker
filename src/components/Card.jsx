import React from 'react'

const Card = (props) => {
    return (
        <div className="card m-2 row" onClick={props.onClick}>
            
            <h5 className="col-5 text-center  card-div ">{props.name}</h5>
            <h5 className="col-4 text-center  card-div">{'₹'+( (parseFloat(props.price)<100) ?parseFloat(props.price).toFixed(4) : props.price) }</h5>
            <h6 className={`col-3 text-center card-div `+ ((parseFloat(props.change)>0) ? `text-success` : `text-danger`)}> {parseFloat(props.change).toFixed(2)+'%'} </h6>
        </div>
    )
}

export default Card
