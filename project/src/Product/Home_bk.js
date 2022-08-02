import React,{Fragment,Component} from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import Product from './ProductDisplay';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            product:JSON,
            filtered:JSON
        }
    }
    filterProduct=(userText)=>{
        const output=this.state.product.filter((data)=>{
            return data.menu_name.toLowerCase().indexOf(userText.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }
   render(){
    return(
        <Fragment>
            <Header userInput={(data)=>{this.filterProduct(data)}}/>
            <div className="home-container">
            <h1>This is website for ordering food online</h1>
            <h2>Menu Names</h2>
            <Product prodData={this.state.filtered}/>
            </div>
            <Footer year="2022" month="August"/>
        </Fragment>
    )
   }
}
export default Home