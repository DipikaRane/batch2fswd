import React,{Component} from 'react';
import './details.css';

class MenuDisplay extends Component {
    orderId=[];
    addItem=(id)=>{
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }
    removeItem=(id)=>{
        this.orderId.splice(this.orderId.indexOf(id.toString(),1))
        this.orderId.push(`${id}`)
    }
    renderCart=(orders)=>{
        if(orders){
            return orders.map((item,index)=>{
                return(
                    <b key={index}>{item},</b>
                )
            })
        }
    }
    renderMenu=({menudata})=>{
        if(menudata){
            return menudata.map((item)=>{
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} alt={item.menu_name} style={{height:90,width:90}}/>&nbsp;&nbsp;
                            {item.menu_name} - Rs. {item.menu_price}
                            <p>{item.description}</p>
                            <p></p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={()=>{this.addItem(item.menu_id)}}>
                                <span className="glyphicon glyphicon-shopping-cart"></span>
                            </button>&nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={()=>{this.removeItem(item.menu_id)}}>
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
            <div className="col-md-12">
                <h2>Item Added</h2>
                <h3>Item Number {this.renderCart(this.orderId)} added</h3>
            </div>
            <div className="col-md-12 bg-danger">
                    {this.renderMenu(this.props)}
                </div>
            </>
        )
    }
    
}
export default MenuDisplay;