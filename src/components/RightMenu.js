import React, {useContext} from 'react';
import '../css/right-menu.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { BillContext } from '../context/BillContext';

function RightMenu() {
  const { setBills, bills, setUser, user, setUsers, users, setTotal, total } = useContext(BillContext);

  function login (e) {
    e.preventDefault();
    //fetch('https://diplom-05-01.herokuapp.com/users').then(response => response.json()).then( response => alert(response));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length && users.some(user => user.name === document.querySelector('#login').value)) {
        for (let i = 0; users.length > i; i++) {
      if ((document.querySelector('#login').value === users[i].name) && 
          (document.querySelector('#password').value === users[i].password)) {
        localStorage.setItem('user', JSON.stringify(users[i]));
        localStorage.setItem('bills', JSON.stringify(users[i].bills));
        localStorage.setItem('categories', JSON.stringify(users[i].categories));
        window.location.assign('/main');
        break
      } else if (document.querySelector('#login').value === users[i].name &&
                 document.querySelector('#password').value !== users[i].password) {
        alert('Please enter valid password');
      }
    }
  } else alert('Your login was not found. Please register')
}

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
                <Link to="/registration" className="mt-2"><FormattedMessage id="registration" defaultMessage="Registration" /></Link>
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default RightMenu;
