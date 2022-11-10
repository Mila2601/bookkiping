import React, {useContext} from 'react';
import '../css/right-menu.css';
import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { BillContext } from '../context/BillContext';



function RightMenu() {
  const { pleaseRegister, enterPass, setUserLocale, yourLogin, yourPass } = useContext(BillContext);

  function login (e) {
    e.preventDefault();
    // fetch('https://homebuhone.herokuapp.com/').
    // then(response => response.json()).
    // then( response => {
    //   alert(response);
    // });

    // fetch('https://homebuhone.herokuapp.com/').
    // then(response => response.json()).
    // then( response => {
    //   alert(JSON.stringify(response));
    // });


    // let response = fetch('https://homebuhone.herokuapp.com/').then(response => response.json()).then(response => alert(response));
    // if (response.ok) { // если HTTP-статус в диапазоне 200-299
    //   // получаем тело ответа (см. про этот метод ниже)
    //   let json = response.json();
    //   console.log(json);
    // } else {
    //   alert("Ошибка HTTP: " + response);
    // }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check is list of users exists and is current user in list
    if (users.length && users.some(user => user.name === document.querySelector('#login').value)) {
      for (let i = 0; users.length > i; i++) {
        // If the username and password are correct saving data and let user into the system.
        // If not, send a message to the alert.
      if ((document.querySelector('#login').value === users[i].name) && 
          (document.querySelector('#password').value === users[i].password)) {
        localStorage.setItem('user', JSON.stringify(users[i]));
        localStorage.setItem('bills', JSON.stringify(users[i].bills));
        localStorage.setItem('categories', JSON.stringify(users[i].categories));
        window.location.assign('/main');
        break
      } else if (document.querySelector('#login').value === users[i].name &&
                 document.querySelector('#password').value !== users[i].password) {
        alert(enterPass);
      }
    }
  } else alert(pleaseRegister)
}

  return (<Navbar collapseOnSelect className="right-navbar" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div id="right" className='right-menu bg-white p-2'>
          <h2 className='p-2'>
            <FormattedMessage id="logIn" defaultMessage="Log in" />
          </h2>
          <Image onClick={
            () => {setUserLocale('en-US');
            document.querySelector('.en').classList.toggle('d-none');
            document.querySelector('.ua').classList.toggle('d-none')}
            } className="ml-2 en langImg" src='./media/united-kingdom-en.png'>
          </Image>
          <Image onClick={
            () => {setUserLocale('uk-UA');
            document.querySelector('.en').classList.toggle('d-none');
            document.querySelector('.ua').classList.toggle('d-none')}
            } className="ml-2 ua d-none langImg" src='./media/ukraine.jpg'>
          </Image>
          <form onSubmit={login} className="d-flex">
          <input  type="text" 
                  name="login" 
                  id="login" 
                  placeholder={yourLogin} 
                  className='my-2' />
          <input  type="password" 
                  name="password" 
                  id="password" 
                  placeholder={yourPass} 
                  className='my-2' />
          <button type='submit' className='my-2'>
            <FormattedMessage id="logIn" defaultMessage="Log in" />
          </button>
          </form>
          <Link to="/registration" className="mt-2">
            <FormattedMessage id="registration" defaultMessage="Registration" />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default RightMenu;
