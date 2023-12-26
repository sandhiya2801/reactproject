import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Header ({userName}){
    // const {userName}  = props;
    return(


        <section>
           <h2>{userName}</h2>
            <div className="nav1">
            <nav>
                <ul>                    
                    <div className='a'><Link to="/home">HOME</Link></div>          
                    
                    <div className='a'><Link to="/about">ABOUT</Link></div>                   
                    
                    <div className='a'><Link to="/service">SERVICE</Link></div>

                    <div className='a'><Link to="/contact">CONTACT</Link></div>
                    <div className='a'><div class="dropdown">
                                       <span>MENU</span>
                                       <div class="dropdown-content">
                                       <Link to="/Profile">Profile</Link><br/>
                                       <Link to="/Order">Order</Link><br/>
                                       <Link to="/Wishlist">Wishlist</Link><br/>
                                       </div>
                    </div></div>
                    <div className='a'><Link to="/Order">Order</Link></div>
                </ul>
            </nav>
            </div>
        </section>
    );
}
export default Header;