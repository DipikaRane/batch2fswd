import axios from 'axios';
import React,{Component} from 'react';
import './filter.css';

const url="https://nodezomobatch2.herokuapp.com/filter";
class CuisineFilter extends Component {
    cuisineFilter=(event)=>{
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let filterUrl;
        if(cuisineId === ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }
    render(){
        return(
            // <h2>Cuisine Filter</h2>
            <div>
                <center><h3>Cuisine Filter</h3></center>
                <div className="radioButton" onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Street Food
                    </label>
                </div>
            </div>
        )
    }
}
export default CuisineFilter;