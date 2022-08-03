import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Home/HomePage';
//import Home from './Product/Home_bk';

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                {/* <Route path='/product' element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Routing