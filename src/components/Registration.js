import React, { useContext, useRef } from 'react';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import "../css/income-form.css";

function Registration() {

    const  { setUser, setUsers, setBills } = useContext(BillContext);

    const name = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const passCopy = useRef(null);

    function register (e) {
        e.preventDefault();
        if (pass.current.value === passCopy.current.value) {
            // setUser({
            //     name: name.current.value,
            //     email: email.current.value,
            //     password: pass.current.value,
            // }); 
            // let response = fetch('https://git.heroku.com/diplom-05-01.git/registration', {
            //     method: 'POST',
            //     mode: "cors",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({email: 'someemail@gmail.com', password: 'qwerty'})
            // }).then(response => response.json()).then( response => alert(response));
            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.name === name.current.value)) {alert('You are already in system')} else {
            users.push({
                name: name.current.value,
                email: email.current.value,
                password: pass.current.value,
                categories: [],
                bills: []
            });
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('bills', JSON.stringify([]));
            localStorage.setItem('categories', JSON.stringify(['Food', 'Rent', 'Phone']));
            localStorage.setItem('user', JSON.stringify({
                name: name.current.value,
                email: email.current.value,
                password: pass.current.value,
                categories: ['Food', 'Rent', 'Phone'],
                bills: []
            }));
            setUsers(users);
            setBills([]);
            setUser({
                name: name.current.value,
                email: email.current.value,
                password: pass.current.value,
                categories: ['Food', 'Rent', 'Phone'],
                bills: []
            })
            window.location.href = '/main';
        }
      } else alert("Make sure that password and password repeat are the same");
    }

  return (
    <div className='registration container bg-white p-4'>
        <h1 className='p-2'><FormattedMessage id="registration" defaultMessage="Registration" /></h1>
        <form onSubmit={register} className="d-flex income-form">
            <div className='form-inner'>
                <input className="" type="text" name="reg" id="reg" placeholder='Your Name' ref={name} />
                <input className="" type="email" name="email-reg" id="email-reg" placeholder='Your email' ref={email} />
                <input className="" type="password" name="password-reg" id="password-reg" placeholder="Enter password" ref={pass}/>
                <input className="" type="password" name="password-reg-copy" id="password-reg-copy" placeholder="Enter password again" ref={passCopy}/>
                <input type='submit' className="income-item"/>
            </div>
        </form>
        <div className=''>
            <h2 className='p-2'><FormattedMessage id="registrationBy" defaultMessage="Registration by fb or gmail: "/></h2>
            <Image className='mr-3' height={32} src='./media/fb.png'></Image>
            <Image height={32} src='./media/gmail.png'></Image>
        </div>
    </div>
  )
}

export default Registration;
