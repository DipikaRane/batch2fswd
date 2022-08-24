import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './Component/Home/HomePage';
//import Home from './Product/Home_bk';
import Listing from "./Component/Listing/Listing";
import Details from "./Component/Details/RestDetails";

function Routing(){
    return(
        <BrowserRouter>          
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
                {/* <Route path='/product' element={<Home/>}/> */}
        </BrowserRouter>
    )
}
export default Routing