import React,{Component} from 'react';
import './search.css';
import QuickDisplay from './QuickDisplay'

const quickUrl="https://nodezomobatch2.herokuapp.com/mealtype";

class QuickSearch extends Component {
    constructor(props) {
        super(props)
        this.state={
            MealType:''
        }
    }
    render(){
        return(
            <div style={{margin:'4%'}}>
                <div style={{marginLeft:'15%'}}>
                <h1>Quicksearch</h1>
                <h3>Search your favorite food</h3>
                </div>
                <br/>
                <QuickDisplay mealtype={this.state.MealType}/>
            </div>
        )
    }
    componentDidMount() {
        fetch(quickUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({MealType:data})
        })
    }
}
export default QuickSearch