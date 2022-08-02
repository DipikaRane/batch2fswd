import React,{Component} from 'react';
import './Home.css';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'Techvanto',
            text:'User Input Here'
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        //this.setState({text:event.target.value})
        this.props.userInput(event.target.value)
    }
    render(){
        return(
            <div className="header">
                <h2>Food Delivery Website</h2>
                {this.state.title}
                <center>
                <input type="text" 
                className="form-control" 
                placeholder="Type here"
                style={{width:'200px'}}
                onChange={this.handleChange}
                /></center>
                {this.state.text}
            </div>
        )
    }
}
export default Header


// function Header(){
//     return(
//         <div>
//             <h2>Food Delivery Website</h2>
//             <input type="text" className="form-control" placeholder="Type here"></input>
//         </div>
//     )
// }
// export default Header

// export default function Header(){
//     return(
//         <div className="header">
//             <h2>Food Delivery Website</h2>
//             <center>
//             <input type="text" 
//             className="form-control" 
//             placeholder="Type here"
//             style={{width:'200px'}}
//             /></center>
//         </div>
//     )
// }