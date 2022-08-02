import React from 'react';
import './Home.css';

const Product=(props)=>{
    const renderProduct=props.prodData.map((item)=>{
        return(
            <div className="card">
                <div className="card-image">
                    <img src={item.menu_image} alt="img"/>
                </div>
                <div className="card-body">
                <h3>{item.menu_name}</h3>
                <h4>{item.menu_type}</h4>
                <h4>{item.menu_price}</h4>
                </div>
            </div>
        )
    })
    return(
        <div className="container">
            {renderProduct}
        </div>
    )
}
export default Product