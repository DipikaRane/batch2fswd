import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              {/* <div className="navbar-header">
                <Link to="/"><span style={{color:'white'}}>SwiggyFood</span></Link>
              </div> */}
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                {/* <li>Page 1</li> */}
                
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to=""><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
              </ul>
            </div>
        </nav>
        </>
    )
}