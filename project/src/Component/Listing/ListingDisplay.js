import React from 'react';
import './Listing.css'

const ListingDisplay=(props)=>{
    const renderData=({restData})=>{
        if(restData){           
                return restData.map((item)=>{
                    return(
                        <div className="content">
                            <div className="tilecomponent1">
                                <img src={item.restaurant_thumb} alt="" />      
                            </div>
                            <div className="tilecomponent3">
                                <button className="btn btn-proceed">Proceed</button>
                            </div>
                            <div className="tilecomponent2">
                                <h4>{item.restaurant_name}</h4>
                                {console.log('name',item.restaurant_name)}
                                <p>{item.address}</p>
                                <p>Rating:  {item.rating_text}</p>
                                <p>Cost: Rs {item.cost}/2 person</p>   
                                <br/>
                                <div>
                                    <span className="label label-info">{item.mealTypes[0].mealtype_name}</span>&nbsp;
                                    <span className="label label-danger">{item.mealTypes[1].mealtype_name}</span>&nbsp;
                                    <span className="label label-warning">{item.cuisines[0].cuisine_name}</span>&nbsp;
                                    <span className="label label-success">{item.cuisines[1].cuisine_name}</span>
                                </div>
                            </div>
                        </div>                                   
                         )
                })
            
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }
    }
    return(
        <div className="cardContainer">
            {renderData(props)}
        </div>
        
    )
}
export default ListingDisplay;