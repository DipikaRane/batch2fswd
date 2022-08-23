import React from 'react';
import Header from "../../Header";
import Search from './Search';
import QuickSearch from './QuickSearch'
const HomePage=()=>{
    return(
        <>
        <Header/>
        <div>
            <Search/>
            <QuickSearch/>
        </div>
        </>
    )
}
export default HomePage