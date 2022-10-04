import React from 'react';
import '../css/right-menu.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function login (e) {
    
      
      //let result = response.json();
      //alert(response);
}
function RightMenu() {
  return (<Navbar className="right-navbar" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div id="right" className='right-menu bg-white p-2'>
                <h2 className='p-2'>Log in</h2>
                <form onSubmit={login} className="d-flex">
                <input type="text" name="login" id="login" placeholder='Your login / email' className='my-2' />
                <input type="password" name="password" id="password" placeholder="Enter Password" className='my-2' />
                <button type='submit' className='my-2'>Log in</button>
                </form> 
                <Link to="/registration"><FormattedMessage id="registration" defaultMessage="Registration" /></Link>              
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default RightMenu;
