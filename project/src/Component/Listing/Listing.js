import React,{Component} from 'react';
import './Listing.css';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../Filter/CuisineFilter';
import CostFilter from '../Filter/CostFilter';
import SortFilter from '../Filter/SortFilter';

const resturl="https://nodezomobatch2.herokuapp.com/filter";

class Listing extends Component {
    constructor(props){
        super(props);
        this.state={
            restList:'',
        }
    }
    setDataPerFilter=(data)=>{
        this.setState({restList:data})
    }
    render(){
        return(
            <div id="maincontent">
                <div id="filter">
                        <center><h3>Filter</h3></center>
                        <hr/>
                        <CuisineFilter mealId={this.props.match.params.id}
                        restPerCuisine={(data)=>{this.setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                        <SortFilter restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                </div>
             <div id="searchresult">
                 <ListingDisplay restData={this.state.restList}/>
             </div>
            </div>
        )
    }   
    componentDidMount(){
        const mealId = this.props.match.params.id;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${resturl}/${mealId}`)
        .then((res) => {
            this.setState({restList:res.data})
        })
    }
}
export default Listing;