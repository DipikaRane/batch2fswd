import React from 'react';
import './search.css'

const QuickDisplay=(props)=>{
    const renderMeal=({mealtype})=>{
        if(mealtype){
            return mealtype.map((item)=>{
                return(
                    <div key={item.mealtype_id} style={{display:'inline-block'}}>
                        <div className="tilecomponent">
                            <div className="imgdiv">
                                <img src={item.meal_image} alt="img"/>
                            </div>
                            <div className="title">
                                <h3>{item.mealtype}</h3>
                            </div>
                        </div>
                    </div>
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