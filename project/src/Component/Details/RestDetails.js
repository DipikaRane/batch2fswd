import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const detUrl="https://nodezomobatch2.herokuapp.com/rest";

class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            details:''
        };
    }
    handleBack=()=>{
        this.props.history.push('/')
    }
    render(){
        let details=this.state.details;
        return(
            <div className="main">
                <div id="content">
                    <div id="imgdiv">
                        <img src={details.restaurant_thumb} alt="rest_image"/>
                    </div>
                    <div id="textdiv">
                        <h2>{details.restaurant_name}</h2>
                        <p>{details.address}</p>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <span>250 Customer Reviews</span>
                        <h4>Price Updated : Rs. {details.cost} </h4>
                        <h4>Spices from {details.restaurant_name} comming to platters</h4>
                        <div className="icon">
                                <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png" alt="icon"/>
                                <p>Contact Less Delivery</p>
                            </div>
                            <div className="icon">
                                <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png" alt="icon"/>
                                <p>Free Home Delivery</p>
                            </div>
                            <h3 className="stock">
                                Available Now
                            </h3>
                            <br/>
                            <div>
                                <button className="cartBtn btn btn-atc" onClick={this.handleBack}>Back</button>&nbsp;
                                <button className="cartBtn btn btn-checkout">Checkout</button>
                            </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Tabs>
                        <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        </TabList>
                        <TabPanel>
                        <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
    async componentDidMount(){
        const restId=this.props.match.params.id;
        const response=await axios.get(`${detUrl}/${restId}`)
        this.setState({details:response.data[0]})
    }
}
export default Details;