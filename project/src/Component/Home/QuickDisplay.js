import React from 'react';
import './search.css';
import {Link} from 'react-router-dom';

const QuickDisplay=(props)=>{
    const renderMeal=({mealtype})=>{
        if(mealtype){
            return mealtype.map((item)=>{
                return(
                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id} style={{display:'inline-block'}}>                   
                        <div className="tilecomponent">
                            <div className="imgdiv">
                                <img src={item.meal_image} alt="img"/>
                            </div>
                            <div className="title">
                                <h3 style={{fontSize:'2rem'}}>{item.mealtype}</h3>
                                <center><p style={{fontSize:'15px',color:'white'}}>{item.content}</p></center>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div id="main-container">
            {renderMeal(props)}
        </div>
    )
}
export default QuickDisplay