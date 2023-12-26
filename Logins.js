import React from 'react';
import ReactDOM from 'react-dom/client';

function Logins() {
    return(
        <div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" placeholder="enter email id"/>
            </div>

            <div>
                <label>Password:</label>
                <input type="text" name="password" placeholder="enter password"/>
            </div>
        </div>
    );
}


export default Logins;