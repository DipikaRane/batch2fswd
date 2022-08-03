import React,{Component} from 'react';
import './search.css'

const locUrl="https://nodezomobatch2.herokuapp.com/location";
const restName="https://nodezomobatch2.herokuapp.com/restaurants?state=";

class Search extends Component{
    constructor(){
        super()
        this.state={
            location:'',
            restName:''
        }
    }
    renderState=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.location_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }
    handleState=(e)=>{
        console.log('e',e.target.value)
        fetch(`${restName}${e.target.value}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({restName:data})
        })
    }
    renderRest=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
    render(){
        return(
            <>
            <div id="heading" >
            <center><h1>SWIGGY-FOOD</h1>
            <h2>Welcome</h2></center>
        <div id="logo">
                <img src="https://i.ibb.co/gPXjJM4/logo.jpg" alt="logo"/>
            </div>
            <div id="city">
                <select className="state" onChange={this.handleState}>
                    <option>----Select State----</option>
                    {this.renderState(this.state.location)}
                    
                </select>
                <select className="cities">
                    <option>----Select Hotel----</option>
                    {this.renderRest(this.state.restName)}
                </select>
            </div>
        </div>
            </>
        )
    }

    componentDidMount(){
        console.log('>>Inside component')
        fetch(locUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
        })
    }
}
export default Search